import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames';

import { Board } from '../Board/Board'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

import Style from './style.module.scss'

export const Ticket = ({ index, id, fieldOne, fieldTwo, showAlert }) => {
  const ttkCombs = useSelector(state => state
    .tickets
    .tickets
    .find(tkt => tkt.id === id)
    .ticketCombinations)

  const activeFieldOne = useSelector(state => state
    .tickets
    .tickets
    .find(tkt => tkt.id === id)
    .fieldOne
    .filter(num => num.isActive))

  const activeFieldTwo = useSelector(state => state
    .tickets
    .tickets
    .find(tkt => tkt.id === id)
    .fieldTwo
    .filter(num => num.isActive)) 

  const price = cn(Style.priceVisible, {
    [Style.priceHidden]: ttkCombs
  })

  return (
    <section className={Style.ticket}>
      <Header ticketNum={index} ticketId={id} />
      <p className={price}>Стоимость билета {ttkCombs * 150} ₽</p>
      <div className={Style.boardsContainer}>
        <Board title="Поле 1" field="fieldOne" ticketId={id} squares={fieldOne} activeField={activeFieldOne} showAlert={showAlert} />
        <Board title="Поле 2" field="fieldTwo" ticketId={id} squares={fieldTwo} activeField={activeFieldTwo} showAlert={showAlert} />
      </div>
      <Footer ticketId={id} activeFieldOne={activeFieldOne} activeFieldTwo={activeFieldTwo} />
    </section>
  )
}
