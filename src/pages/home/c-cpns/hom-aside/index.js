import React, { memo, useState } from 'react'

import { homeRoute } from '@/common/constants'

import style from './style.module.css'

export default memo(function HomeAside(props) {

  const { isClick, setIsClick } = props
  const [isShow, setIsShow] = useState(false)

  const unfold = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      <div className={style.aside}>
        <div className={style.bar} onClick={unfold}>
          <i className={style.icon} />訂單管理
        </div>
        <div style={{display: !isShow? 'none': 'block'}}>
          {
            homeRoute.map((item, index) => {
              return (
                <div className={style.barItem}
                     key={item.key}
                     style={{ color: isClick === item.key ? '#40a9ff': ''}}
                     onClick={() => setIsClick(item.key)}>
                  {item.name}
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  )
})
