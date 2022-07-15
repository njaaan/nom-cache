import { AWSError } from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { fetchData } from './helpers'

type DishEntry = {
    dishName: string
    dishRating: number
    dishRestaurant: number
    dishZipCode: number
    dishCity: string
    dishMastodon: string
    dishHappyCow: string
    dishUrl: string
    dishHaveEaten: boolean
    dishComment: string
}

const restaurantList = [
    { restaurantName: 'Bramibals 1', restaurantID: '123' },
    { restaurantName: 'Miss Saigon', restaurantID: '222' },
]

export function AddDish() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<DishEntry>()
    const onSubmit: SubmitHandler<DishEntry> = (data) => console.log(data)

    // alles im useeffect array sind dependencies und wenn sich 1 der dependencies ändert, wird useEffect noch mal ausgeführt. Bei emptyarray nur wenn die component initially geladen wird.
    // Hier brauchen wir es auch nur 1x... for now

    const getAllMyRestaurants = async () => {
        const restaurantArray = await fetchData('nom_cache')
        console.log(
            'hier ist der restaurantarray: ',
            JSON.stringify(restaurantArray)
        )
        setAllMyRestaurantsList(JSON.stringify(restaurantArray))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [allMyRestaurantsList, setAllMyRestaurantsList] = useState<any>()
    useEffect(() => {
        if (!allMyRestaurantsList) {
            getAllMyRestaurants()
        }
    })

    // console.log(watch('example')) // watch input value by passing the name of it
    // console.log(watch('dishRating'))
    console.log(errors)
    // console.log('all my restaurants from AddDish: ', allMyRestaurants)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <section>
            <h1>Add a new dish</h1>
            <p>{allMyRestaurantsList}</p>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <label>
                    Dish Name
                    <input {...register('dishName', { required: true })} />
                    {errors.dishName && (
                        <span>The dish&apos;s name is required</span>
                    )}
                </label>

                <label>
                    Select restaurant or add new one
                    <select {...register('dishRestaurant')}>
                        {restaurantList.map((restaurant, index) => (
                            <option
                                key={restaurant.restaurantID}
                                value={restaurant.restaurantID}
                            >
                                {restaurant.restaurantName}
                            </option>
                        ))}
                    </select>
                    <button>Add new Restaurant</button>
                </label>
                <label>
                    Rating (1 is bad, 10 is superb)
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        {...register('dishRating')}
                    />
                </label>
                <label>
                    Zip Code
                    <input type="number" {...register('dishZipCode')} />
                </label>
                <label>
                    City
                    <input type="text" {...register('dishCity')} />
                </label>

                <label>
                    Happycow
                    <input
                        type="text"
                        {...register('dishHappyCow', {
                            pattern: /.?happycow\.net\/reviews\/.{1,256}/i,
                        })}
                    />
                    {errors.dishHappyCow && (
                        <span>Please enter a HappyCow Url :)</span>
                    )}
                </label>
                <label>
                    Mastodon <input type="text" {...register('dishMastodon')} />
                </label>
                <label>
                    URL <input type="text" {...register('dishUrl')} />
                </label>

                <label htmlFor="haveEaten">
                    Want to eat
                    <input type="checkbox" {...register('dishHaveEaten')} />
                </label>
                <br />
                <label>
                    Comment
                    <textarea {...register('dishComment')} />
                </label>
                <br />
                <input type="submit" />
            </form>
        </section>
    )
}
