import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'

import { getArray } from '../../../helpers/getArray'
import { getEditions, getSum } from '../../../store/ticketsSlice'

import Style from './style.module.scss'

export const ShownPanel = ({ showTickets }) => {
  const [selectValue, setSelectValue] = useState(1)
  const activeTickets = useSelector(state => state.tickets.activeTicketsNum)
  const combinations = useSelector(state => state.tickets.combinationsTotal)
  const sum = useSelector(state => state.tickets.sum)

  const multiTickets = useSelector(state => state.multiadding.ticketsNum)
  const multiCombinations = useSelector(state => state.multiadding.combinations)

  const dispatch = useDispatch()

  const handleChange = ({target}) => {
    setSelectValue(target.value)
    dispatch(getEditions(target.value))
    dispatch(getSum())
  }
  return (
    <div className={Style.panelshown}>
      {
        showTickets &&  
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
      }
      <div className={Style.description}>
        <p>Билетов</p>
        {
          showTickets ? 
            <p>{activeTickets}</p> :
            <p>{multiTickets}</p>
        }
      </div>
      <div className={Style.description}>
        <p>Комбинаций</p>
        {
          showTickets ?
            <p>{combinations}</p> :
            <p>{multiCombinations}</p>
        }
      </div>
      <div className={Style.price}>
        <p>Сумма</p>
        {
          showTickets ?
            <p>{sum} ₽</p> :
            <p>{multiCombinations * 150} ₽</p>
        }
      </div>
    </div> 
  )
}
