import React , { createRef }from 'react';
import ReactDom from 'react-dom';

import ToastContainer from './c-cpns/toast-container';

const toastContainerDiv = document.createElement('div');
document.body.appendChild(toastContainerDiv);

const toastRef = createRef()

ReactDom.render(<ToastContainer ref={toastRef} />, toastContainerDiv);


const toast = {
  info: (value) => {
    toastRef.current.setValue(value)
  },
  stop: () => {
    toastRef.current.clearTimer()
  }
}


export default toast