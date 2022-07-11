import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <p>Hi {process.env.REACT_APP_AWS_ACCESS_KEY_ID}</p>
            {/* <button onClick={addRestaurant}>Add TestRestaurant</button> */}
            <App />
        </div>
    </React.StrictMode>
)
