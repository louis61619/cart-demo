import React, { memo, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { changeOrderAction } from '@/store/home/actions'

import style from "./style.module.css";

const orderClass = {
  isComplete: {
    name: "已完成",
    style: "complete",
  },
  isProcess: {
    name: "進行中",
    style: "process",
    isChecked: true
  }
}

export default memo(function OrderList(props) {
  const { list, type } = props;

  const {
    orderList
  } = useSelector((state) => ({
    orderList: state.home.orderList
  }), shallowEqual)
  const [ checkedList, setCheckedList ] = useState({})

  const dispatch = useDispatch()

  const checkItem = (id) => {
    if(checkedList[id]) {
      const newList = {...checkedList}
      delete newList[id]
      setCheckedList(newList)
      return
    }
    const newList = {...checkedList}
    newList[id] = true
    setCheckedList(newList)
  }

  const cancelOrder = () => {
    const newList = orderList.map(item => {
      if(checkedList[item.id]) {
        const newItem = {...item}
        newItem.status = {
          code: 3,
          type: "已取消",
        }
        return newItem
      } else {
        return item
      }
    })
    dispatch(changeOrderAction(newList))
  }

  return (
    <div className={style.list}>
      <div className={style.title}>
        <span className={style.text}>{orderClass[type].name}</span>
        <span className={style.cancel}>
          { orderClass[type].isChecked && <button onClick={cancelOrder}>取消訂單</button> }
        </span>
      </div>
      <div>
        {list.map((item, index) => {
          return (
            <div className={style.listItem} key={item.id}>
              <div className={style.image}>
                <img
                  src={item.logo}
                  alt="logo"
                />
              </div>
              <div className={style.content}>
                <div className={style.top}>
                  <span className={style[orderClass[type].style]}>{item.status?.type}</span>
                  { orderClass[type].isChecked ? <span>預計出貨： {item.date}</span>: <span /> }
                </div>
                <div className={style.bottom}>
                  <div>
                    {item.name}
                  </div>
                </div>
              </div>
              <div className={style.checkbox}>
                { 
                  orderClass[type].isChecked && 
                  <input type="checkbox"
                         checked={checkedList[item.id] || false}
                         onChange={() => checkItem(item.id)} />
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
