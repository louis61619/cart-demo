import React, { memo, useState } from 'react'
import HomeAside from './c-cpns/hom-aside'
import OrderTracking from './c-cpns/order-tracking'
import NewOrder from './c-cpns/new-order'

import style from './style.module.css'

export default memo(function Home() {

  // const [isClick, setIsClick] = useState(null)
  const [isClick, setIsClick] = useState(null)

  return (
    <div className={style.main}>
      <HomeAside setIsClick={setIsClick} isClick={isClick} />
      {
        {
          orderTracking: <OrderTracking/>,
          newOrder: <NewOrder />,
        }[isClick]
      }
    </div>
  )
})
