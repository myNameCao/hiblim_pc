/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-14 22:14:49
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
   	 	<li><a href="http://www.hiblim.com/incorporation.html">COMPANY REGISTRATION</a></li>
		<li>
			<a href="http://www.hiblim.com/secretary.html">COMPANY SECRETARY</a>
		</li>
   	<li>
			<a href="http://www.hiblim.com/accounting.html">ACCOUNTING & AUDITING</a>
		</li>
   	<li>
			<a >CONTACT US</a>
		</li>
   	 </ul>
       </div>	
    </div>);
}

export default Head;
