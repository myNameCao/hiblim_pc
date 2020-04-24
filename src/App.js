
import React from 'react';
import RouteView from './router';
import routes from './router/routes';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom"


import chatbot from './lib/intercom'

chatbot()

function App () {
  return (
    <div className="App">
         <Router>
           <RouteView routes={routes}/>
         </Router>
    </div>
  );
}

export default App;
