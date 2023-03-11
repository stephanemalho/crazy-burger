import React from 'react'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components'

import { theme } from '../../../assets/theme'

export default function ToastAdmin() {
  return (
    <ToastAdminStyled  className="toaster" bodyClassName="body-toast">
      {" "}
      <ToastContainer  />
    </ToastAdminStyled>
  )
}

const ToastAdminStyled = styled.div`
  .toaster {
    max-width: 300px;
  }
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }
  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
