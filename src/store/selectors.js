export const activeTicketsSelector = state => state.tickets.activeTicketsNum
export const multiTicketsSelector = state => state.multiadding.ticketsNum
export const multiCombinationsSelector = state => state.multiadding.combinations
export const combinationsSelector = state => state.tickets.combinationsTotal
export const editionsSelector = state => state.tickets.editionsNum
export const sumSelector = state => state.tickets.sum
export const multiFieldOneSelector = state => state.multiadding.fieldOne
export const multiFieldTwoSelector = state => state.multiadding.fieldTwo
export const multiEditionsSelector = state => state.multiadding.editions
export const alertSelector = state => state.tickets.alert