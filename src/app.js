import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { If, Else, Then } from 'react-if';
import SettingProvider from './context/settingContext.js';
import { AuthContext } from './context/auth.js';
import ToDo from './components/todo.js';
import Header from './components/header';
import SettingsForm from './components/settingForm';
import './style.css'
import Auth from './components/auth';
import Signup from './components/signup';

const EditLink = () => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = () => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

function App() {

  const authContext = useContext(AuthContext);

  return (
    <>
      <Header />
      <If condition={authContext.loggedIn}>
        <Then>
          <Router>
            <Switch>
              <SettingProvider>
                <Route exact path='/settings' >
                  <SettingsForm />
                </Route>
                <Route exact path='/'>
                  <EditLink />
                  <DeleteLink />
                  <ToDo />
                </Route>
              </SettingProvider>
            </Switch>
          </Router>
        </Then>
        <Else>
          <Signup/>
        </Else>
      </If>
   </>
  )
}

export default App