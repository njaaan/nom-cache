import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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

    // console.log(watch('example')) // watch input value by passing the name of it
    // console.log(watch('dishRating'))
    console.log(errors)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <section>
            <h1>Add a new dish</h1>
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
