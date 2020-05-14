/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React, {useState}from 'react';
import Input from '../../components/input'
import Dialog from '../../components/dialog'


import {ajax}  from '../../utils/ajax'
import './index.less'
function Index ({routes, history}){

  const [email, setEmail]  =  useState('')
  const [password, setPassword]  =  useState('')
  const [tip, setTip]  =  useState('')

function goResgister (){
    history.push('/join')
}
async function login (){
  if(!email || !password) return 
  if(!email.includes('@')) return 
  await ajax(
        {
        url:'login',
        data:{accountID:email, password:password},
        success (res){
          if(res.code !== 200){
            setTip('用户名密码不正确,请重新登录')
            return 
          }
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
                 <div  className={(!email || !password) ? 'btn_login  btn_login_not' : 'btn_login'} onClick={login} >login</div>
             </div>
          </div>
      </div>
   <div className="copyright"><a href="http://www.beian.miit.gov.cn/">苏ICP备20013765号-1 </a> | 版权 © 2020 南京云风速科技有限公司 | 电话: 4006-922-006 </div>
   {tip && <Dialog close={e=>{setTip('')}} text={tip} ></Dialog>}
  </div>
  )
  }
  export default Index

