import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  manageTicketsNum, 
  manageFieldOne, 
  manageFieldTwo, 
  manageEditions 
} from '../store/multiaddingSlice'

import { RangeSlider } from './components/Range/Range'

import Style from './style.module.scss'

export const Multiadding = () => {

  const tickets = useSelector(state => state.multiadding.ticketsNum)
  const fieldOne = useSelector(state => state.multiadding.fieldOne)
  const fieldTwo = useSelector(state => state.multiadding.fieldTwo)
  const editions = useSelector(state => state.multiadding.editions)

  const dispatch = useDispatch()

  const handleTickets = (value) => {
    dispatch(manageTicketsNum(value))
  }

  const handleFieldOne = (value) => {
    dispatch(manageFieldOne(value))
  }

  const handleFieldTwo = (value) => {
    dispatch(manageFieldTwo(value))
  }

  const handleEditions = (value) => {
    dispatch(manageEditions(value))
  }

  return (
    <section className={Style.container}>
      <RangeSlider title="Количество билетов" value={tickets} min={1} max={100} handleClick={handleTickets}/>
      <RangeSlider title="Выбранных чисел в поле 1" value={fieldOne} min={4} max={12} handleClick={handleFieldOne}/>
      <RangeSlider title="Выбранных чисел в поле 2" value={fieldTwo} min={4} max={12} handleClick={handleFieldTwo}/>
      <RangeSlider title="Количество тиражей" value={editions} min={1} max={10} handleClick={handleEditions}/>
    </section>
  )
}
