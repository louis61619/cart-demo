import React, { memo, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getCurrentDate } from '@/utils/formate-date'
import { orderStatus } from '@/common/constants'
import { changeOrderAction } from '@/store/home/actions'

import toast from '@/components/toast'
import OrderCard from "@/components/order-card";

import style from "./style.module.css";


const init = {
  code: orderStatus[0].value,
  type: orderStatus[0].name,
}



export default memo(function NewOrder() {

  const [cacheList, setCacheList] = useState([{
    status: init
  }]);
  const {
    orderList
  } = useSelector(state => ({
    orderList: state.home.orderList
  }), shallowEqual)

  const dispatch = useDispatch()

  const addCard = () => {
    setCacheList([...cacheList, {status: init}]);
  };

  const commit = () => {
    const newCacheList = cacheList.map(item => {
      const newItem = {...item}
      newItem.date = getCurrentDate()
      newItem.id = + new Date() + Math.random()
      return newItem
    })
    const newList = [...orderList, ...newCacheList]
    dispatch(changeOrderAction(newList))
    setCacheList([{
      status: init
    }])
    toast.info('新增成功')
  }

  return (
    <div className={style.block}>
      <div className={style.list}>
        {cacheList.map((item, index) => {
          return (
            <OrderCard
              key={index}
              index={index}
              item={item}
              cacheList={cacheList}
              setCacheList={setCacheList}
            />
          );
        })}
      </div>
      <div className={style.right}>
        <div className={style.icon} onClick={addCard}>
          +
        </div>
      </div>
      <div className={style.commit}>
        <button onClick={commit}>新增</button>
      </div>
    </div>
  );
});
