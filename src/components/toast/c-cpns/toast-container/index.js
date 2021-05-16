import React, { memo, useImperativeHandle, forwardRef, useState, useRef } from 'react'
import style from './style.module.css'

export default memo(forwardRef(function ToastContainer(props, ref) {
  const [toastValue, setToastValue] = useState("")
  const [isShow, setIsShow] = useState(false)
  
  const timer = useRef()

  useImperativeHandle(ref, () => ({
    setValue: (value) => {
      setToastValue(value)
      setIsShow(true)

      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setIsShow(false)
      }, 1000)
    },
    clearTimer: () => {
      setIsShow(false)
      clearTimeout(timer.current)
    }
  }), [])

  return (
    <div className={style.box} style={{display: !isShow ? 'none': 'block'}}>
      <span className={style.content}>{toastValue}</span>
    </div>
  )
}))
