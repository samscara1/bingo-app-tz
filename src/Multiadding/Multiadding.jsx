import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  manageTicketsNum, 
  manageFieldOne, 
  manageFieldTwo, 
  manageEditions 
} from '../store/multiaddingSlice'

import { RangeSlider } from './components/Range/Range'
import { getTicketCombinations } from '../helpers/getTicketCombinations'

import Style from './style.module.scss'
import { 
  multiEditionsSelector, 
  multiFieldOneSelector, 
  multiFieldTwoSelector, 
  multiTicketsSelector 
} from '../store/selectors'

export const Multiadding = ({ manageAlert }) => {

  const tickets = useSelector(multiTicketsSelector)
  const fieldOne = useSelector(multiFieldOneSelector)
  const fieldTwo = useSelector(multiFieldTwoSelector)
  const editions = useSelector(multiEditionsSelector)

  const dispatch = useDispatch()

  const handleTickets = (value) => {
    if ( (getTicketCombinations(fieldOne, fieldTwo, 4) 
      * (tickets + 1) 
      * editions * 150 < 300000) && value > tickets ) {
      dispatch(manageTicketsNum(value))
    } else if (value < tickets) { 
      dispatch(manageTicketsNum(value))
    } else if ((getTicketCombinations(fieldOne, fieldTwo, 4) 
      * (tickets + 1) 
      * editions * 150 > 300000) && (value > editions)) {
      manageAlert()
    }
  }

  const handleFieldOne = (value) => {
    if ((getTicketCombinations((fieldOne + 1), fieldTwo, 4) 
      * tickets * editions * 150 < 300000)) {
      dispatch(manageFieldOne(value))
    } else if (value < fieldOne) {
      dispatch(manageFieldOne(value))
    } else if ((getTicketCombinations((fieldOne + 1), fieldTwo, 4) 
      * tickets 
      * editions * 150 > 300000) && (value > fieldOne)) {
      manageAlert()
    }
  }

  const handleFieldTwo = (value) => {
    if ((getTicketCombinations(fieldOne, (fieldTwo + 1), 4) 
      * tickets * editions * 150 < 300000)) {
      dispatch(manageFieldTwo(value))
    } else if (value < fieldTwo) {
      dispatch(manageFieldTwo(value))
    } else if ((getTicketCombinations(fieldOne, (fieldTwo + 1), 4) 
      * tickets * editions * 150 > 300000) && (value > fieldTwo)) {
      manageAlert()
    }
  }

  const handleEditions = (value) => {
    if( (getTicketCombinations(fieldOne, fieldTwo, 4) 
      * tickets * (editions + 1) * 150 < 300000)) {
      dispatch(manageEditions(value))
    } else if (value < editions) {
      dispatch(manageEditions(value))
    } else if ((getTicketCombinations(fieldOne, fieldTwo, 4) 
      * tickets 
      * (editions + 1) * 150 > 300000) && (value > editions)) {
      manageAlert()
    }
  }

  return (
    <section className={Style.container}>
      <RangeSlider 
        title="Количество билетов" 
        value={tickets} 
        min={1} 
        max={100} 
        handleClick={handleTickets} 
      />
      <RangeSlider 
        title="Выбранных чисел в поле 1" 
        value={fieldOne} 
        min={4} 
        max={12} 
        handleClick={handleFieldOne} 
      />
      <RangeSlider 
        title="Выбранных чисел в поле 2" 
        value={fieldTwo} 
        min={4} 
        max={12} 
        handleClick={handleFieldTwo} 
      />
      <RangeSlider 
        title="Количество тиражей" 
        value={editions} 
        min={1} 
        max={10} 
        handleClick={handleEditions} 
      />
    </section>
  )
}
