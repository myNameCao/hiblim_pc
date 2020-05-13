/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState} from 'react';
import Input from '../../components/input'
import Dialog from '../../components/dialog'

import {ajax} from '../../utils/ajax'
import './index.css'
function Join ({history}){
  const [firstName, setFirstName]  =  useState('') 
  const [lastname, setLastname]  =  useState('')
  const [email, setEmail]  =  useState('')
  const  [tipmessage, setmessage] =  useState('')

  const [tip, setTip]  =  useState('')

  const [password, setPassword]  =  useState('')

  const [comfirm, setComfirm]  =  useState('')

  function Register (){
    if(!firstName || !lastname || !email || !password || !comfirm) return
  if(!email.includes('@')){setmessage('输入正确的邮箱'); return }
  if(password != comfirm){setmessage('两次输入的密码不正确'); return }
    ajax({
      url:'regist',
      data:{
        firstName,
        lastname,
        email,
        password
      },
      success (res){
        history.push('/login')
      },
      error (e){
        console.log(e)
        setTip(e.message)
      }
    })
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
           <p className='tip_error'>{tipmessage}</p>
           <div className={(!firstName || !lastname || !email || !password || !comfirm) ? 'btn_register btn_register_not' : 'btn_register'}  onClick={Register} >Register</div>
        </div>
      </div>
      {tip && <Dialog close={e=>{setTip('')}} text={tip} ></Dialog>}
  </div>
  )
  }
  export default Join

