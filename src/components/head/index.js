/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-07 11:18:49
 */

import React from 'react';

import './index.less'
import logo from './logo.png'

function Head () {

  return (
    <div className="head">
       <div className="menubox">
          <h1 className="logo">
               <img src={logo} />
            </h1>
       </div>	
    </div>);
}

export default Head;
