import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'
import { awsSecretKey, awsKeyID } from './secrets'
// console.log('le process.env', process.env)

const configuration: ConfigurationOptions = {
    region: 'eu-central-1',
    secretAccessKey: awsSecretKey,
    accessKeyId: awsKeyID,
}

AWS.config.update(configuration)

// read from DB
const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName: string) => {
    const params = {
        TableName: tableName,
    }

    return docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
            return data
        }
    })
}

export const putData = (tableName: string, data: object) => {
    const params = {
        TableName: tableName,
        Item: data,
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}

// const addRestaurant = () =>
//     putData('restaurants', { id: '43', restaurantName: 'Miss Saigon' })
