/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-12 20:06:08
 */

import React, {useState} from 'react'

import './index.css'

function Input ({title, type}) {
  const [val, setVal]  =  useState('')
  const [currentState, setCurrentState]  = useState('') // error focus
  return (
    <div className={`inputItem ${currentState}`}>
            <p>{title}</p>
            <input  onFocus={e=>setCurrentState('focus')}  onBlur={e=>setCurrentState('')} type={type || 'text' } value={val}  onChange={e=>setVal(e.target.value)} />
    </div>
  );
}

export default Input;
