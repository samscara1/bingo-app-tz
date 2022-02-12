export const getSquares = (squares) => {
  const set = []

  for(let i = 1; i <= squares; i++){
    set[i]= i;
  }
  return set
}