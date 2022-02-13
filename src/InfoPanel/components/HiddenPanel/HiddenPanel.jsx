import React from 'react'

import { Finger } from '../../../svgComponents/Finger'

import Style from './style.module.scss'

export const HiddenPanel = () => {
  return (
    <div className={Style.hiddenpanel}>
      <Finger />
      <p className={Style.passage}>Выберите числа</p>
    </div>
  )
}
