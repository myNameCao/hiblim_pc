/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React from 'react';
import RouteView from '../../router';


  function layer ({routes}){
    return ( 
  <div className="layer">
    <RouteView routes={routes} ></RouteView>
  </div>
    )
  }

  export default layer

