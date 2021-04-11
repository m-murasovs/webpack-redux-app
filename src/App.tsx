import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(): React.ReactNode => {
                            return (
                                <section>
                                    <h2>Nice redux bro</h2>
                                </section>
                            )
                        }}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default App;