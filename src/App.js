import React from 'react';
import { Redirect, Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout';
import UserInfo from './components/UserInfo';
import Users from './components/Users';
import UsersLoader from './components/UsersLoader';

const App = function () {
    return (
        <UsersLoader>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/'>
                            <Users />
                        </Route>
                        <Route path='/user/:id'>
                            <UserInfo />
                        </Route>
                        <Route path='*'>
                            <Redirect to='/' />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </UsersLoader>
    );
};

export default App;
