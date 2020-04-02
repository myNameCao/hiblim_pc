/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React from 'react';
import Head from '../../components/head'
import Main from '../../components/main'
import './index.css'
function Index ({routes}){
  
    return ( 
  <div className='index'>
      <Head></Head>
      <Main  routes={routes} ></Main>
  </div>
  )
  }
  export default Index

