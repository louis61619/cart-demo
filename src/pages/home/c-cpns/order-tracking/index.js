import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useSelector } from 'react-redux'
import { dateToTimeStamp } from '@/utils/formate-date'

import List from '@/components/order-list'
import style from './style.module.css'

const option = [
  {
    value: 0,
    name: "全部"
  },
  {
    valeu: 1,
    name: "進行中"
  },
  {
    value: 2,
    name: "已完成"
  }
]

export default memo(function OrderTracking() {

  const [processList, setProcessList] = useState([])
  const [completedList, setCompletedList] = useState([])
  const [isSelect, setIsSelect] = useState(0)

  const {
    orderList
  } = useSelector(state => ({
    orderList: state.home.orderList
  }), shallowEqual)

  useEffect(() => {
    const prolist = orderList.filter(item => {
      return item.status.code === 1 || item.status.code === 2
    }).sort(function(a, b) {
      return dateToTimeStamp(b.date) - dateToTimeStamp(a.date)
    })
    setProcessList(prolist)
    
    const complist = orderList.filter(item => {
      return item.status.code === 3 || item.status.code === 4
    }).sort(function(a, b) {
      return dateToTimeStamp(b.date) - dateToTimeStamp(a.date)
    })
    setCompletedList(complist)
  }, [orderList])

  const changeSelect = (e) => {
    setIsSelect(e.target.selectedIndex)
  }

  return (
    <div className={style.block}>
      <div className={style.selectArea}>
        <span className={style.selectTitle}>訂單狀態</span>
        <select className={style.select} onChange={e => changeSelect(e)}>
          {
            option.map((item, index) => {
              return (
                <option key={index}>{item.name}</option>
              )
            })
          }
        </select>
      </div>
      <div className={style.right}>
        {
          (isSelect === 0 || isSelect === 1) &&
          <List list={processList} type="isProcess" />
        }
        {
          (isSelect === 0 || isSelect === 2) &&
          <List list={completedList} type="isComplete" />
        }
      </div>
    </div>
  )
})
