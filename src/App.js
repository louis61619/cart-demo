import React, { memo } from 'react'
import './assets/css/main.css'
import { Provider } from 'react-redux'
import store from '@/store'
import Auth from '@/components/auth'

export default memo(function App() {

  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  )
})
