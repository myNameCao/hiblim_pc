/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState}from 'react';
import Input from '../../components/input'
import './index.css'
function Index ({routes, history}){
  const [email, setEmail]  =  useState('')
  const [password, setPassword]  =  useState('')

 function goResgister (){
    history.push('/join')
}
 function login (){
    history.push('/onboarding/home')
}
    return ( 
  <div className='login'>
      <div  className='mid_module'>
          <div className='logo'></div>
          <div  className='creatUser'>New to Haibilin? <span className='creatbtn' onClick={goResgister}  >  Create an account. </span></div>
          <div className='des_welcome'>Welcome to Haibilin</div>
          <div className='content'>
             <Input  type='email' value={email} onChange={val=>setEmail(val)} { ... {title:'请输入邮箱'}}  />
             <Input  type='password' value={password} onChange={val=>setPassword(val)}   { ... {title:'请输入密码'}} />
             <div> 
                 <div></div>
                 <div  className='btn_login' onClick={login} >login</div>
             </div>
          </div>

      </div>
  </div>
  )
  }
  export default Index

