import React from 'react'
import { Square } from '../Square/Square'
import { nanoid } from 'nanoid'

import style from './style.module.scss'
import { useSelector } from 'react-redux'


export const Board = () => {
  const squares = useSelector(state => state.tickets.squaresNum)
  return (
    <section className={style.board}>
      {
        squares.map((square) => {
          return <Square title={square} key={nanoid()}/>
        })
      }
    </section>
  )
}
