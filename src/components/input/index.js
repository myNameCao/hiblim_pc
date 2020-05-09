/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-09 09:58:19
 */

import React, {useState} from 'react'

import './index.css'

function Input ({title, type, value, onChange, check}) {
  const [currentState, setCurrentState]  = useState('') // error focus
  function blur (e){
    if(!e.target.value){
      setCurrentState('error')
      check && check(false)
      return 
    }
    if(type === 'email' && !e.target.value.includes('@')){
      check && check(false)
      setCurrentState('error')
      return 
    }
    check && check(true)
    setCurrentState('')
  }
  return (
    <div className={`inputItem ${currentState}`}>
            <p>{title}</p>
            <input  autoComplete="new-password" onFocus={e=>setCurrentState('focus')}  onBlur={e=>blur(e)} type={type || 'text' } value={value}  onChange={e=>onChange && onChange(e.target.value)} />
    </div>
  );
}

export default Input;
