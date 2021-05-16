import React, { memo } from 'react'

import { orderStatus } from '@/common/constants'

import style from './style.module.css'

export default memo(function OrderCard(props) {

  const { index, item, cacheList, setCacheList } = props

  const changeName = (value) => {
    const newList = [...cacheList]
    const newItem = {...item, name: value}
    newList[index] = newItem
    setCacheList(newList)
  }

  const changeLogo = (value) => {
    const newList = [...cacheList]
    const newItem = {...item, logo: value}
    newList[index] = newItem
    setCacheList(newList)
  }

  const changeStatus = (e) => {
    // console.log(orderStatus[e.target.selectedIndex])
    const newStatus = {
      code: orderStatus[e.target.selectedIndex].value,
      type: orderStatus[e.target.selectedIndex].name,
    }
    const newList = [...cacheList]
    const newItem = {...item, status: newStatus}
    newList[index] = newItem
    setCacheList(newList)
  }

  return (
    <div className={style.card}>
      <div>
        <span>商品名稱：</span>
        <input className={style.input} 
               value={item.name || ""}
               onChange={e => changeName(e.target.value)} />
      </div>
      <div>
        <span>圖示連結：</span>
        <input className={style.input} 
               value={item.logo || ""} 
               onChange={e => changeLogo(e.target.value)} />
      </div>
      <div>
        <span>訂單狀態：</span>
        <select className={style.select} 
                value={item?.status?.code || 0} 
                onChange={e => changeStatus(e)}>
          {
            orderStatus.map((item, index) => {
              return (
                <option key={index} value={item.value}>{item.name}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
})
