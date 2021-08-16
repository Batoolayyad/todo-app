import React from 'react';

import ToDo from './components/todo/todo.js';
import ListProvider from './context/listContext';
import SettingsProvider from './context/settingsContext';
export default class App extends React.Component {
  render() {
    return (
      <>
      <SettingsProvider>
      <ListProvider>
        <ToDo />
      </ListProvider>
    </SettingsProvider>
    </>
    );
  }
}