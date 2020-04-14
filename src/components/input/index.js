/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-14 10:07:07
 */

import React, {useState} from 'react'

import './index.css'

function Input ({title, type, value, onChange}) {
  const [currentState, setCurrentState]  = useState('') // error focus
  function blur (e){
    if(!e.target.value){
      setCurrentState('error')
      return 
    }
    if(type === 'email' && !e.target.value.includes('@')){
      setCurrentState('error')
      return 
    }
    setCurrentState('')
  }
  return (
    <div className={`inputItem ${currentState}`}>
            <p>{title}</p>
            <input  onFocus={e=>setCurrentState('focus')}  onBlur={e=>blur(e)} type={type || 'text' } value={value}  onChange={e=>onChange && onChange(e.target.value)} />
    </div>
  );
}

export default Input;
