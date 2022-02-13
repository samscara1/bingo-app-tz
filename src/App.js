import React from 'react';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { TicketList } from './TicketsList/TicketList';

import Style from './style.module.scss'

export const App = () => {
  return (
    <div className={Style.app}>
      <TicketList />
      <InfoPanel />
    </div>
  );
}