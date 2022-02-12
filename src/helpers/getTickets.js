import { nanoid } from 'nanoid'

import { getArray } from './getArray'

export const getTickets = (num) => {
  const arr = []
  for(let i = 0; i < num; i++){
    arr[i]= {
      id: nanoid(),
      fieldOne: getArray(20, {
        isActive: false
      }),
      fieldTwo: getArray(20, {
        isActive: false
      }),
      ticketCombinations: 0
    }
  }
  return arr
}