/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-13 14:37:18
 */

import React, {useState} from 'react'

import './index.less'

function Dialog ({close, text, title}) {
  return (
    <div className='shadow'>
      <div className='contentView'>
         <h1 className='title_erroe'>{title || 'ERROR'}</h1>
         <p>{text || '错误显示'}</p>
         <div className='action_line_dialog'>
           <div  onClick={e=>{close & close()}} className='know'>知道了</div>
         </div>
      </div>
    </div>
  );
}

export default Dialog;
