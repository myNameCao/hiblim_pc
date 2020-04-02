/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React from 'react';
import { Redirect  } from 'react-router-dom'


import './index.css'
function Index (props){
  let sigin = 1
  return sigin ? <Redirect to={{ pathname: "/onboarding/home"}} /> : <Redirect  to={{pathname: "/login"}} />
  
}
export default Index

