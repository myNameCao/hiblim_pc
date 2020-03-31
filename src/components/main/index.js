/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 21:38:54
 */

import React from 'react';
import RouteView from '../../router';
import routes from '../../router/routes';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"

import './index.css'

function Main () {

  return (
    <div className="main"> 
    <Router>
      <ul  className='nav_content'>
        <li className='item_tag  active_tag'>
          <span  className='icon-office'></span>
          <Link to="/home">Home</Link>
        </li>
        <li className='item_tag'>
          <span  className='icon-mail-envelope-open'></span>
          <Link to="/mailroom">Mailroom</Link>
        </li>
      </ul>
      <div  className='item_content'>
       <RouteView  routes={routes}/>
      </div>
      </Router>
    </div>
  );
}

export default Main;


