import { factorialize } from './factorialize'

export const getTicketCombinations = (fieldOne, fieldTwo, num) => {
  const combinations = (factorialize(fieldOne) * factorialize(fieldTwo))/
    ((factorialize(num)*factorialize(num))*
    factorialize(fieldOne - num)*
    factorialize(fieldTwo - num))
  return Math.round(combinations)
}