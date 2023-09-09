// App.js
import React from 'react';
import './GoalSettingApp.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoalSettingApp from './GoalSettingApp';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GoalSettingApp} />
        <Route path="/about" component={AboutPage} />
        {/* Add more routes for other pages if needed */}
      </Switch>
    </Router>
  );
}

export default App;

