/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:01:59
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-09 20:38:46
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
                render={props => <route.component{...props} routes={route.routes}/>}
            /> 
          ))}
         
        </Switch>)
}
export default RouteView
