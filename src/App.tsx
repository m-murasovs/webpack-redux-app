import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import GlobalStyle from './globalStyle';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(): React.ReactNode => {
                            return (
                                <>
                                    <AddPostForm />
                                    <PostsList />
                                </>
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