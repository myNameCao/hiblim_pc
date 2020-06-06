/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:01:59
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-16 12:33:36
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom'
function RouteView ({routes}){
  return(
  <Switch>
{routes.map((route, i) => ( 
            <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={props => <route.component{...props} title={route.title}   routes={route.routes}/>}
            /> 
          ))}
         
        </Switch>)
}
export default RouteView
