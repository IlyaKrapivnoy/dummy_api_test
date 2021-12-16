import React from 'react';
import { Redirect, Switch } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import UserInfo from './components/UserInfo';
import Users from './components/Users';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Users />
                    </Route>
                    <Route path="/user/:id">
                        <UserInfo />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
