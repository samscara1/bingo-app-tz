import { factorialize } from './factorialize'

export function getTicketCombinations (fieldOne, fieldTwo, num)  {
  const factorializedFields = factorialize(fieldOne) * factorialize(fieldTwo)
  const factorializedNumSquared = (factorialize(num) ** 2)
  let fieldONeMinusNum = factorialize(fieldOne - num)
  let fieldTwoMinusNum = factorialize(fieldTwo - num)
  if (fieldONeMinusNum < 0) {
    fieldONeMinusNum = 1
  }
  if (fieldTwoMinusNum < 0) {
    fieldTwoMinusNum = 1
  }
  if (fieldOne >= 4 && fieldTwo >= 4) {
    return((factorializedFields / (factorializedNumSquared * fieldONeMinusNum * fieldTwoMinusNum)))
  } 
  return 0
}