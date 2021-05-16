const currentDate = new Date()

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function dateToTimeStamp(date) {
  const arr = date.split("/")
  arr[0] = Number(arr[0]) + 1911
  const timestamp = new Date(arr.join("-")).getTime()
  return timestamp
}

export function getCurrentDate() {
  const Date = formatDate(currentDate.getTime(), 'yyyy-MM-dd')
  const arr = Date.split("-")
  arr[0] = Number(arr[0]) - 1911
  return arr.join("/")
}