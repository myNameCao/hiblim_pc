/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 16:10:07
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-05-13 10:01:41
 */

 
// height 95px

import React, {useState} from 'react'

import './index.css'

function Textarea ({title, type, value, onChange, check}) {
  const [currentState, setCurrentState]  = useState('') // error focus
  function blur (e){
    if(!e.target.value){
      setCurrentState('error')
      check && check(false)
      return 
    }
    check && check(true)
    setCurrentState('')
  }
  return (
    <div className={`textareaItem ${currentState}`}>
            <p>{title}</p>
            <textarea  autoComplete='new-password' onFocus={e=>setCurrentState('focus')}  onBlur={e=>blur(e)} type={type || 'text' } value={value}  onChange={e=>onChange && onChange(e.target.value)} />
    </div>
  );
}

export default Textarea;
