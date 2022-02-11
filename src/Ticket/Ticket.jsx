import React from 'react'

import { Board } from '../Board/Board'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import style from './style.module.scss'

export const Ticket = ({ index, id }) => {
  return (
    <section className={style.ticket}>
      <Header ticketNum={index} ticketId={id} />
      <div className={style.boardsContainer}>
        <Board title="Поле 1" />
        <Board title="Поле 2" />
      </div>
      <Footer />
    </section>
  )
}
