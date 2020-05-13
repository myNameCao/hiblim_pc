/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState}from 'react';

import Menu from '../../components/menu'
import Footer from '../../components/footer'
import   inc_3_light from './inc_3_light.png'
import Input from '../../components/input'
import Textarea from '../../components/textarea'


import './index.less'
function Contact ({routes, history}){
  const [firstName, setFirstName]  =  useState('') 
  const [lastname, setLastname]  =  useState('')
  const [email, setEmail]  =  useState('')
  const [phone, setPhone]  =  useState('')
  const [message, setMessage]  =  useState('')
  const  [tipmessage, setmessage] =  useState('')

  const [tip, setTip]  =  useState('')

    return (<div className='contact'>
      <Menu></Menu>
      <div className='banner'>
        <h1>Would Like to Learn More About Our Services?</h1>
        <p> We’re glad to assist and will get back to you in the same day, normally within 15 minutes!</p>
      </div>
      <div className='myself'>
        <div  className='inputContent'>
          <div className='name'>
              <div className='firstname'>
                <Input  {...{title:'First Name'}}  value={firstName} onChange={val=>{setFirstName(val)}} />
              </div>
              <div className='lastName'>
                <Input  {...{title:'Last Name'}}  value={lastname} onChange={val=>{setLastname(val)}} /> 
              </div>
          </div>
          <div className='email '>
              <Input type='email'{...{title:'Email'}}   value={email} onChange={val=>{setEmail(val)}} />
          </div>
          
          <div className='phone '>
              <Input type='number' {...{title:'Phone'}}   value={phone} onChange={val=>{setPhone(val)}} />
          </div>
          <div className='meaaage'>
              <Textarea  {...{title:'Message'}}   value={message} onChange={val=>{setMessage(val)}} />
          </div>
          <div className='submit'>Submit</div>
        </div>
        <div className='rightView'>
          <h2>Hong Kong Office</h2>
          <p  className='tip_text'> Leave us a message and we'll get back to you right away...</p>
          <p>Room 1405, 14/F, 135 Bonham, Strand Trade Centre,</p>
          <p> 135 Bonham Strand, Sheung Wan, Hong Kong</p>
          <p style={{marginTop:'40px'}}>Email: info@hiblim.com</p>
          <p>Phone: +852 5701 1656</p>
        </div>
      </div>
      <Footer/>
  </div>)
  }
  export default Contact

