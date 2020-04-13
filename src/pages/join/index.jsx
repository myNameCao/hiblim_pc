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
function Join ({routes}){
    return ( 
  <div className='join'>
    <div  className='mid_module'>

         <div className='w100'>
            <div className='w50'> <Input  {...{title:'First Name'}} /> </div>
            <div className='w50 mRight'> <Input  {...{title:'Last Name'}} /> </div>
        </div>
        <div className='w100'> <Input   {...{title:'Email'}} /> </div>
        <div className='w100'>
            <div className='w50'> <Input {...{title:'Password'}}  /> </div>
            <div className='w50 mRight'> <Input {...{title:'comfirm PassWord'}}  /> </div>
        </div>

        <div  className='actionLine'>
           <div className='btn_register'>Register</div>
        </div>
         

      </div>
  </div>
  )
  }
  export default Join

