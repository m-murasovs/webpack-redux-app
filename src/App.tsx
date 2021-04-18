import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { PostsList, AddPostForm, SinglePostPage, EditPostForm } from './features/posts';
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
                    <Route exact path="/posts/:postId" component={SinglePostPage} />
                    <Route exact path="/editPost/:postId" component={EditPostForm} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
