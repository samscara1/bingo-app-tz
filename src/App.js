import React from 'react';

import { InfoPanel } from './InfoPanel/InfoPanel';
import { TicketList } from './TicketsList/TicketList';

export const App = () => {
  console.log('app')
  return (
    <div>
      <TicketList />
      <InfoPanel />
    </div>
  );
}