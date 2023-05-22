import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ login } />
        <Route exact path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
      </Switch>
    </main>
  );
}
