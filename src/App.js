import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import login from './pages/Login';

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ login } />
      </Switch>
    </main>
  );
}
