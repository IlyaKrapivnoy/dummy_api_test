import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import Users from './components/Users';
import UserInfo from './components/UserInfo';
import Layout from './components/Layout';
import UsersLoader from './components/UsersLoader';

function App() {
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
}

export default App;
