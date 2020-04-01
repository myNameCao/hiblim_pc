/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-01 10:56:59
 */

import React from 'react';
import RouteView from '../../router';
import routes from '../../router/routes';

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom"

import './index.css'


function TagList (){

  let {pathname} = useLocation();
  console.log(pathname)

  return (
    <div className="main">    
      <ul  className='nav_content'>
        <li className={(pathname === '/' || pathname === '/home') ? 'item_tag  active_tag' : 'item_tag'}>
          <Link to="/home">
           <span  className='icon-office iconFont'></span>
            Home
            </Link>
        </li>
        <li className={pathname === '/mailroom' ? 'item_tag  active_tag' : 'item_tag'}>
          <Link to="/mailroom">
          <span  className='icon-mail-envelope-open  iconFont'></span>
            Mailroom
            </Link>
        </li>
      </ul>
      <div  className='item_content'>
       <RouteView  routes={routes}/>
      </div>
    </div>
  );
}

function Main () {
  return (
    <Router>
      <TagList />
    </Router>
  )
}


export default Main;


