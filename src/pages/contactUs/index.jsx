/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState}from 'react';

import Menu from '../../components/menu'
import './index.less'
function Contact ({routes, history}){
  const [email, setEmail]  =  useState('')
  const [password, setPassword]  =  useState('')

 
    return (<div className='contact'>
      <Menu></Menu>
  </div>)
  }
  export default Contact

