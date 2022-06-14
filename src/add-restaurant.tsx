export const AddRestaurant = (): JSX.Element => {
    return (
        <section>
            <h1>Add a new restaurant to the log</h1>
            <form method="post">
                <label>
                    Name
                    <input type="text" name="restaurantName" />
                </label>
                <fieldset>
                    <legend>Address</legend>
                    <label>
                        Street
                        <input type="text" name="street" />
                    </label>
                    <label>
                        Number
                        <input type="text" name="housenumber" />
                    </label>
                    <label>
                        Zip Code
                        <input type="number" name="zipcode" />
                    </label>
                    <label>
                        City
                        <input type="text" name="city" />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Links</legend>
                    <label>
                        Happycow
                        <input type="text" name="happycow" />
                    </label>
                    <label>
                        Mastodon
                        <input type="text" name="mastodon" />
                    </label>
                    <label>
                        URL
                        <input type="text" name="restaurantUrl" />
                    </label>
                </fieldset>{' '}
                <label>
                    Comment
                    <textarea name="comment"></textarea>
                </label>
                <button type="submit">Save this restaurant to your log</button>
            </form>
        </section>
    )
}
