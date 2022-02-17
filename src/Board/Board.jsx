import React from 'react'
import { nanoid } from 'nanoid'
import cn from 'classnames'

import { Square } from '../Square/Square'

import Style from './style.module.scss'
import { getDeclension } from '../helpers/getDeclension'

export const Board = ({ title, field, ticketId, squares, activeField, showAlert }) => {

  const activeInfo = cn(Style.hidden, {
    [Style.shown]: activeField.length
  })

  const fieldNum = (field === 'fieldOne') ? 'первом' : 'втором'
  const marked = (activeField.length <= 4) ? 'отмечено' : 'отмечены'
  const numbers = getDeclension(activeField.length, ['число', 'числа', 'чисел'])

  return (
    <section className={Style.board}>
      <h6 className={Style.title}>{title}</h6>
      <p className={activeInfo}> На {fieldNum} поле {marked} {activeField.length} {numbers}</p>
      {
        squares.map((square, i) => {
          return (
            <Square 
              num={i+1} 
              key={nanoid()} 
              isActive={square.isActive} 
              field={field} 
              ticketId={ticketId} 
              showAlert={showAlert} 
            />
          )
        })
      }
    </section>
  )
}
