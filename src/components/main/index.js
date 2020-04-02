/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-02 09:30:56
 */

import React from 'react';
import RouteView from '../../router';
import {
  Link,
  useLocation
} from "react-router-dom"

import './index.css'

function Main ({routes}) {
  let {pathname} = useLocation();
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


export default Main;


