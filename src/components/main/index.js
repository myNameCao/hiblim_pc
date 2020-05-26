/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-26 17:47:25
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
        <li className={ pathname === '/onboarding/home' ? 'item_tag  active_tag' : 'item_tag'}>
          <Link to="/onboarding/home">
           <span  className='icon-Company iconFont'></span>
            Company
            </Link>
        </li>
        <li className={pathname === '/onboarding/files' ? 'item_tag  active_tag' : 'item_tag'}>
          <Link to="/onboarding/files">
          <span  className='icon-inbox-document-text  iconFont'></span>
            Files
            </Link>
        </li>
        <li className={pathname === '/onboarding/billing' ? 'item_tag  active_tag' : 'item_tag'}>
          <Link to="/onboarding/billing">
          <span  className='icon-billing  iconFont'></span>
            Billing
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


