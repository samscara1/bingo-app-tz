import React, { useEffect } from 'react'

import Style from './style.module.scss'

export const Alert = ({ hideAlert }) => {
  useEffect(() => {
  // eslint-disable-next-line no-unused-vars
    const timeout = setTimeout(() => {
      hideAlert()
    }, 5000)
    return () => clearTimeout(timeout);
  }, [])
  return (
    <div
      className={Style.alert}
    >
      Стоимость одного билета не может превышать 300 000 ₽
    </div>
  )
}
