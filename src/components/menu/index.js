/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-23 15:53:32
 */

import React from 'react';

import './index.less'
import logo from './logo.png'

function Head () {

  return (
    <div className="head">
       <div className="menubox">
          <h1 className="logo">
            <a href="index.html"><img src={logo} /></a>
            </h1>
          <ul>
            <li>
              <a href="incorporation.html">COMPANY REGISTRATION</a>
              </li>
            <li>
              <a href="secretary.html">COMPANY SECRETARY</a>
            </li>
            <li>
              <a href="accounting.html">ACCOUNTING & AUDITING</a>
            </li>
            <li>
              <a href="http://www.hiblim.com/contactUs">CONTACT US</a>
            </li>
            <li>
              <a href="http://www.hiblim.com">LOG IN</a>
            </li>
          </ul>
       </div>	
    </div>);
}

export default Head;
