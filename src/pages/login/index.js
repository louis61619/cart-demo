import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { changeLoginStateAction } from '@/store/login/actions'
import { currentPassword, emailRule } from '@/common/constants'
import toast from '@/components/toast'

import style from "./style.module.css";

export default memo(function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()


  const changeAcountValue = (e) => {
    setEmail(e.target.value)
  }

  const changePasswordValue = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g,'')
    setPassword(newValue)
  }

  const login = () => {
    if(!email) {
      return toast.info('帳號不得為空')
    }
    if(!password) {
      return toast.info('密碼不得為空')
    }
    if(email.search(emailRule) === -1) {
      return toast.info('帳號格式錯誤')
    }
    if(password !== currentPassword) {
      return toast.info('密碼輸入錯誤')
    }
    toast.stop()
    dispatch(changeLoginStateAction(true))
  }

  return (
    <div className={style.box}>
      <div className={style.title}>
        登錄
      </div>
      <div className={style.content}>
        <input className={style.input}
               onChange={e => changeAcountValue(e)}
               value={email}
               placeholder="輸入帳號" />
        <input className={style.input}
               type="password"
               onChange={e => changePasswordValue(e)}
               value={password}
               placeholder="輸入密碼" />
      </div>
      <div className={style.footer}>
        <div>
          <button className={style.button} onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
})
