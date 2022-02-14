import React, { useState } from 'react'
import { TabBtn } from './components/TabBtn/TabBtn'

import Style from './style.module.scss'

export const TabSelector = ({ handleClick }) => {
  const [choseNums, setChoseNums] = useState(true)
  const [multiadd, setMultiadd] = useState(false)

  const handleClickNums = () => {
    setChoseNums(true)
    setMultiadd(false)
    console.log('left')
    handleClick(true)
  }

  const handleClickMulti = () => {
    setChoseNums(false)
    setMultiadd(true)
    console.log('right')
    handleClick(false)
  }

  return (
    <nav className={Style.tabs}>
      <TabBtn title="Выбор чисел" handleBtnClick={handleClickNums} isActive={choseNums} />
      <TabBtn title="Мультивставка" handleBtnClick={handleClickMulti} isActive={multiadd} />
    </nav>
  )
}
 