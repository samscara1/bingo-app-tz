import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { InfoPanel } from './InfoPanel/InfoPanel';
import { TicketList } from './TicketsList/TicketList';
import { Alert } from './Alert/Alert'

import Style from './style.module.scss'
import { TabSelector } from './TabSelector/TabSelector';
import { Multiadding } from './Multiadding/Multiadding';
import { showAlert, hideAlert } from './store/ticketsSlice';

export const App = () => {
  const alert = useSelector(state => state.tickets.alert)
  const [showTickets, setShowTickets] = useState(true)
  const dispatch = useDispatch()

  const alertOn = () => {
    dispatch(showAlert())
  }

  const alertOff = () => {
    dispatch(hideAlert())
  }

  return (
    <div className={Style.app}>
      {
        alert && <Alert hideAlert={alertOff} />
      }
      <div className={Style.container}>
        <TabSelector handleClick={setShowTickets} />
        {
          showTickets ? <TicketList/> : <Multiadding manageAlert={alertOn} />
        }
      </div>
      <InfoPanel showTickets={showTickets} manageAlert={alertOn} />
    </div>
  );
}