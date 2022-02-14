import React from 'react'
import { nanoid } from 'nanoid'
import cn from 'classnames'

import { Square } from '../Square/Square'

import Style from './style.module.scss'
import { getDeclension } from '../helpers/getDeclension'

export const Board = ({ title, field, ticketId, squares, activeField }) => {

  const activeInfo = cn(Style.hidden, {
    [Style.shown]: activeField.length
  })

  const fieldNum = (field === 'fieldOne') ? 'первом' : 'втором'
  const marked = (activeField.length <= 4) ? 'отмечено' : 'отмечены'
  const numbers = getDeclension(activeField.length, ['число', 'числа', 'чисел'])

  // const markedNum = (activeField.length === 1) ? 'число': (activeField.length > 1 && activeField.length < 5) ? 'числа' : 'чисел'

  return (
    <section className={Style.board}>
      <h6 className={Style.title}>{title}</h6>
      <p className={activeInfo}> На {fieldNum} поле {marked} {activeField.length} {numbers}</p>
      {
        squares.map((square, i) => {
          return <Square num={i+1} key={nanoid()} isActive={square.isActive} field={field} ticketId={ticketId}/>
        })
      }
    </section>
  )
}
