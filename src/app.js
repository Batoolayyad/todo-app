import React from 'react';
import SettingProvider from './context/settingContext.js';
import ToDo from './components/todo.js';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './components/header';
import SettingsForm from './components/settingForm';
import './style.css'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <SettingProvider>
          <Route exact path='/settings' >
            <SettingsForm />
          </Route>
          <Route exact path='/'>
            <ToDo />
          </Route>
        </SettingProvider>
      </Switch>
    </Router>
  )
}

export default App