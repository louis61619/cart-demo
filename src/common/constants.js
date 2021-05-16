export const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
export const currentPassword = "12345";

export const homeRoute = [
  {
    name: '訂單查詢',
    key: 'orderTracking'
  },
  {
    name: '新增訂單',
    key: 'newOrder'
  }
]

export const orders = [
    {
      name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
      logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
      status: {
        code: 3,
        type: "已取消",
      },
      date: "107/6/12",
    },
    {
      name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
      logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
      status: {
        code: 2,
        type: "已成立",
      },
      date: "108/7/21",
    },
    {
      name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
      logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
      status: {
        code: 1,
        type: "處理中",
      },
      date: "108/6/2",
    },
    {
      name: "Apple AirPds 2",
      logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
      status: {
        code: 4,
        type: "已送達",
      },
      date: "108/3/02",
    },
  ]

export const orderStatus = [
  {
    value: 1,
    name: "處理中"
  },
  {
    value: 2,
    name: "已成立"
  },
  {
    value: 3,
    name: "已取消"
  },
  {
    value: 4,
    name: "已送達"
  }
]
