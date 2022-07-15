import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h1>Nom log</h1>
            {/* <button onClick={addRestaurant}>Add TestRestaurant</button> */}
            <App />
        </div>
    </React.StrictMode>
)
