import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { AddRestaurant } from './add-restaurant'
import { Home } from './home'

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
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </section>
    )
}
