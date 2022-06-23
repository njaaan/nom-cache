import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { putData, fetchData } from './helpers'

type RestaurantEntry = {
    restaurantName: string
    restaurantStreet: string
    restaurantHouseNumber: string
    restaurantZipCode: number
    restaurantCity: string
    restaurantMastodon: string
    restaurantHappyCow: string
    restaurantUrl: string
    restaurantHaveEaten: boolean
    restaurantComment: string
}

export function AddRestaurant() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<RestaurantEntry>()
    const onSubmit: SubmitHandler<RestaurantEntry> = (data) => {
        console.log(data)
        putData('restaurants', { id: '123', ...data })
    }

    console.log(fetchData('restaurants'))

    // console.log(watch('example')) // watch input value by passing the name of it
    console.log(errors)

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <section>
            <h1>Add a new restaurant to the log</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                {/* register your input into the hook by invoking the "register" function */}
                <label>
                    Restaurant Name
                    <input
                        {...register('restaurantName', { required: true })}
                    />
                    {errors.restaurantName && (
                        <span>The restaurant&apos;s name is required</span>
                    )}
                </label>
                <fieldset>
                    <legend>Address</legend>
                    <label>
                        Street
                        <input type="text" {...register('restaurantStreet')} />
                    </label>
                    <label>
                        Number
                        <input
                            type="text"
                            {...register('restaurantHouseNumber')}
                        />
                    </label>
                    <label>
                        Zip Code
                        <input
                            type="number"
                            {...register('restaurantZipCode')}
                        />
                    </label>
                    <label>
                        City
                        <input type="text" {...register('restaurantCity')} />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Links</legend>
                    <label>
                        Happycow
                        <input
                            type="text"
                            {...register('restaurantHappyCow', {
                                pattern: /.?happycow\.net\/reviews\/.{1,256}/i,
                            })}
                        />
                        {errors.restaurantHappyCow && (
                            <span>Please enter a HappyCow Url :)</span>
                        )}
                    </label>
                    <label>
                        Mastodon{' '}
                        <input
                            type="text"
                            {...register('restaurantMastodon')}
                        />
                    </label>
                    <label>
                        URL <input type="text" {...register('restaurantUrl')} />
                    </label>
                </fieldset>

                <label htmlFor="haveEaten">
                    I have eaten there already
                    <input
                        type="checkbox"
                        {...register('restaurantHaveEaten')}
                    />
                </label>
                <br />
                <label>
                    Comment
                    <textarea {...register('restaurantComment')} />
                </label>
                <br />
                <input type="submit" />
            </form>
        </section>
    )
}

// export const AddRestaurant = (): JSX.Element => {
//     return (
//         <section>
//             <h1>Add a new restaurant to the log</h1>
//             <form method="post">
//                 <label>
//                     Name
//                     <input type="text" name="restaurantName" />
//                 </label>
//                 <fieldset>
//                     <legend>Address</legend>
//                     <label>
//                         Street
//                         <input type="text" name="street" />
//                     </label>
//                     <label>
//                         Number
//                         <input type="text" name="housenumber" />
//                     </label>
//                     <label>
//                         Zip Code
//                         <input type="number" name="zipcode" />
//                     </label>
//                     <label>
//                         City
//                         <input type="text" name="city" />
//                     </label>
//                 </fieldset>
//                 <fieldset>
//                     <legend>Links</legend>
//                     <label>
//                         Happycow
//                         <input type="text" name="happycow" />
//                     </label>
//                     <label>
//                         Mastodon
//                         <input type="text" name="mastodon" />
//                     </label>
//                     <label>
//                         URL
//                         <input type="text" name="restaurantUrl" />
//                     </label>
//                 </fieldset>{' '}
//                 <label>
//                     Comment
//                     <textarea name="comment"></textarea>
//                 </label>
//                 <button type="submit">Save this restaurant to your log</button>
//             </form>
//         </section>
//     )
// }
