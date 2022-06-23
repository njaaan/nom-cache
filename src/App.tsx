import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { AddRestaurant } from './add-restaurant'
import { Home } from './home'
import { AddDish } from './add-dish'

export default function App() {
    return (
        <section>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/add-restaurant">
                                    Add a new restaurant
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-dish">Add a new dish</Link>
                            </li>
                            <li>
                                <Link to="/brokenlinkisbroken">
                                    Broken Link &lt;\3
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Routes> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
                    <Routes>
                        <Route
                            path="/add-restaurant"
                            element={<AddRestaurant />}
                        />
                        <Route path="/add-dish" element={<AddDish />} />

                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </section>
    )
}
