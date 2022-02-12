import React from 'react'

import { Board } from '../Board/Board'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import style from './style.module.scss'

export const Ticket = ({ index, id, fieldOne, fieldTwo }) => {
  return (
    <section className={style.ticket}>
      <Header ticketNum={index} ticketId={id} />
      <div className={style.boardsContainer}>
        <Board title="Поле 1" field="fieldOne" ticketId={id} squares={fieldOne} />
        <Board title="Поле 2" field="fieldTwo" ticketId={id} squares={fieldTwo} />
      </div>
      <Footer />
    </section>
  )
}
