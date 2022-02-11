import React from 'react'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'

import { Square } from '../Square/Square'

import style from './style.module.scss'


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
