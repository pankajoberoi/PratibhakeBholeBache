import React from 'react'
import { toast } from 'react-toastify';

const ToastComp = ({save,setSave}) => {

    const showSuccessToast = () => {
    toast.info("Form Submitted!", {
      position: "top-right", // Optional: customize position per toast
      autoClose: 3000, // Optional: auto close after 3 seconds
    });
    setSave(false)
  };


  return (
    <div>
        
        {(save)?showSuccessToast():''}

    </div>
  )
}

export default ToastComp