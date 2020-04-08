/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React from 'react';


import {
  CSSTransition
} from "react-transition-group";

import './index.css'
  export default (Component)=>{
    return function layer (){
         return ( 
         <CSSTransition
                 classNames="fade"
                 timeout={300}
               >
              <div>11</div>
         </CSSTransition>
         )
       }
  }

