import React, { memo, Fragment } from 'react'
import Home from '@/pages/home'
import Login from '@/pages/login'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function Router() {

  const {
    isLogin
  } = useSelector(state => ({
    isLogin: state.login.isLogin
  }), shallowEqual)


  return (
    // <Home />
    <>
      {isLogin? 
        <Home />:
        <Login />
      }
    </>
  )
})
