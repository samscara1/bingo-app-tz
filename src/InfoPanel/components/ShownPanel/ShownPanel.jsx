import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'

import { getArray } from '../../../helpers/getArray'
import { getEditions, getSum } from '../../../store/ticketsSlice'

import Style from './style.module.scss'

export const ShownPanel = () => {
  const [selectValue, setSelectValue] = useState(1)
  const activeTickets = useSelector(state => state.tickets.activeTicketsNum)
  const combinations = useSelector(state => state.tickets.combinationsTotal)
  const sum = useSelector(state => state.tickets.sum)

  const dispatch = useDispatch()

  const handleChange = ({target}) => {
    setSelectValue(target.value)
    dispatch(getEditions(target.value))
    dispatch(getSum())
  }
  return (
    <div className={Style.panelshown}>
      <div className={Style.description}>
        <p>Кол-во тиражей</p>
        <select 
          className={Style.select}
          value={selectValue} 
          onChange={handleChange}>
          {
            getArray(10).map((num, i) => {
              return <option value={i+1} key={nanoid()}>{i+1}</option>
            })
          }
        </select>
      </div>
      <div className={Style.description}>
        <p>Билетов</p>
        <p>{activeTickets}</p>
      </div>
      <div className={Style.description}>
        <p>Комбинаций</p>
        <p>{combinations}</p>
      </div>
      <div className={Style.price}>
        <p>Сумма</p>
        <p>{sum} ₽</p>
      </div>
    </div> 
  )
}
