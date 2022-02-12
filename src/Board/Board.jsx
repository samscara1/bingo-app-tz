import React from 'react'
import { nanoid } from 'nanoid'

import { Square } from '../Square/Square'

import style from './style.module.scss'

export const Board = ({ title, field, ticketId, squares }) => {
  return (
    <section className={style.board}>
      <h6 className={style.title}>{title}</h6>
      {
        squares.map((square, i) => {
          return <Square num={i+1} key={nanoid()} isActive={square.isActive} field={field} ticketId={ticketId}/>
        })
      }
    </section>
  )
}
