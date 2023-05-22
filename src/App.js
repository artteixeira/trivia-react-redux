import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ login } />
        <Route exact path="/game" component={ Game } />
      </Switch>
    </main>
  );
}
