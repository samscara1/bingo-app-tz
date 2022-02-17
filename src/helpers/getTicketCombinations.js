import { factorialize } from './factorialize'

export function getTicketCombinations (fieldOne, fieldTwo, num)  {
  const factorializedFields = factorialize(fieldOne) * factorialize(fieldTwo)
  const factorializedNumSquared = (factorialize(num) ** 2)
  const fieldONeMinusNum = factorialize(fieldOne - num)
  const fieldTwoMinusNum = factorialize(fieldTwo - num)
  
  return((factorializedFields / (factorializedNumSquared * fieldONeMinusNum * fieldTwoMinusNum)))
}