/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState} from 'react';
import Input from '../../components/input'
import './index.css'
function Join ({history}){
  const [firstName, setFirstName]  =  useState('') 
  const [lastname, setLastname]  =  useState('')
  const [email, setEmail]  =  useState('')
  const [password, setPassword]  =  useState('')
  const [comfirm, setComfirm]  =  useState('')
  
  function Register (){
    console.log({firstName, lastname, email, password, comfirm})
  }
    return ( 
  <div className='join'>
    <div  className='mid_module_register'>
         <div className='w100'>
            <div className='w50'> <Input  {...{title:'First Name'}}  value={firstName} onChange={val=>{setFirstName(val)}} /> </div>
            <div className='w50 mRight'> <Input  {...{title:'Last Name'}}  value={lastname} onChange={val=>{setLastname(val)}} /> </div>
        </div>
        <div className='w100'> <Input type='email'{...{title:'Email'}}   value={email} onChange={val=>{setEmail(val)}} /> </div>
        <div className='w100'>
            <div className='w50'> <Input {...{title:'Password'}}    value={password} onChange={val=>{setPassword(val)}} /> </div>
            <div className='w50 mRight'> <Input {...{title:'comfirm PassWord'}}    value={comfirm} onChange={val=>{setComfirm(val)}} /> </div>
        </div>
        <div  className='actionLine'>
           <div className='btn_register'  onClick={Register} >Register</div>
        </div>
         

      </div>
  </div>
  )
  }
  export default Join

