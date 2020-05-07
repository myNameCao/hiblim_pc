/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-07 21:10:54
 */

import React, {useState} from 'react'

import './index.less'

function Dialog ({close, text}) {
  return (
    <div className='shadow'>
      <div className='contentView'>
         <h1 className='title_erroe'>ERROR</h1>
         <p>{text || '错误的写哦我安稳HIV'}</p>
         <div className='action_line'>
           <div  onClick={e=>{close & close()}} className='know'>知道了</div>
         </div>
      </div>
    </div>
  );
}

export default Dialog;
