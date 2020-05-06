/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState}from 'react';
import Input from '../../components/input'

import {ajax}  from '../../utils/ajax'
import './index.less'
function Index ({routes, history}){

  const [email, setEmail]  =  useState('')
  const [password, setPassword]  =  useState('')

function goResgister (){
    history.push('/join')
}
async function login (){
  await ajax(
        {
        url:'login',
        data:{accountID:email, password:password},
        success (){
          history.push('/onboarding/home')
        }
       }
    )
}
    return ( 
  <div className='login'>
      <div  className='mid_module'>
          <div className='logo'></div>
          <div  className='creatUser'>New to Hiblim? <span className='creatbtn' onClick={goResgister}  >  Create an account. </span></div>
          <div className='des_welcome'>Welcome to Hiblim</div>
          <div className='content'>
             <Input  type='email' value={email} onChange={val=>setEmail(val)} { ... {title:'请输入邮箱'}}  />
             <Input  type='password' value={password} onChange={val=>setPassword(val)}   { ... {title:'请输入密码'}} />
             <div> 
                 <div></div>
                 <div  className='btn_login' onClick={login} >login</div>
             </div>
          </div>

      </div>
   <div className="copyright"><a href="http://www.beian.miit.gov.cn/">苏ICP备20013765号-1 </a> | 版权 © 2020 Nanjing Yunfengsu Technology Co., Ltd. | 电话: 4006-922-006 </div>
  </div>
  )
  }
  export default Index

