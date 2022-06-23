import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const awsSecretKey: string =
    process.env.REACT_APP_AWS_SECRET_ACCESS_KEY ??
    'dotenv is missing the AWS secret acces key'
const awsKeyID: string =
    process.env.REACT_APP_AWS_ACCESS_KEY_ID ??
    'dotenv is missing the AWS access ID'

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
