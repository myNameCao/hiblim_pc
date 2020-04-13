/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:17:03
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-03-31 18:20:50
 */

import React from 'react';
import Input from '../../components/input'
import './index.css'
function Index ({routes}){
    return ( 
  <div className='login'>
      <div  className='mid_module'>
          <div className='logo'></div>
          <div  className='creatUser'>New to Haibilin? <span className='creatbtn'>  Create an account. </span></div>
          <div className='des_welcome'>Welcome to Haibilin</div>
          <div className='content'>
             <Input  { ... {title:'请输入邮箱'}} />
             <Input  { ... {title:'请输入密码', type:'password'}} />
             <div> 
                 <div></div>
                 <div  className='btn_login' >login</div>
             </div>
          </div>

      </div>
  </div>
  )
  }
  export default Index

