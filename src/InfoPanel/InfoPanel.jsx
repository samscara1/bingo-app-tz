import React from 'react'
import { useSelector } from 'react-redux'
import { HiddenPanel } from './components/HiddenPanel/HiddenPanel'
import { ShownPanel } from './components/ShownPanel/ShownPanel'

import Style from './style.module.scss'

export const InfoPanel = ({ showTickets }) => {
  const activeTickets = useSelector(state => state.tickets.activeTicketsNum)
  return (
    <section className={Style.infopanel}>
      <h1 className={Style.heading}>
        Купить билеты <br />
        «Спортлото «4 из 20»
      </h1>

      {(activeTickets || !showTickets) ? 
        <ShownPanel showTickets={showTickets} /> :
        <HiddenPanel />}
    </section>
  )
}
