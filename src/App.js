import React, { useState } from 'react';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { TicketList } from './TicketsList/TicketList';

import Style from './style.module.scss'
import { TabSelector } from './TabSelector/TabSelector';
import { Multiadding } from './Multiadding/Multiadding';

export const App = () => {
  const [showTickets, setShowTickets] = useState(true)
  return (
    <div className={Style.app}>
      <div className={Style.container}>
        <TabSelector handleClick={setShowTickets} />
        {
          showTickets ? <TicketList /> : <Multiadding />
        }
      </div>
      <InfoPanel showTickets={showTickets} />
    </div>
  );
}