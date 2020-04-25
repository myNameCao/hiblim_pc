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
      <div className='banner'>
        <h1>Would Like to Learn More About Our Services?</h1>
        <p> We’re glad to assist and will get back to you in the same day, normally within 15 minutes!</p>
      </div>
      <div className='myself'>
        <div className='leftView'></div>
        <div className='rightView'>
          <h2>Hong Kong Office</h2>
          <p>Room 1405, 14/F, 135 Bonham, Strand Trade Centre,</p>
          <p> 135 Bonham Strand, Sheung Wan, Hong Kong</p>
          <p>Email: info@hiblim.com</p>
          <p>Phone: +852 3008 8221</p>
        </div>
      </div>
  </div>)
  }
  export default Contact

