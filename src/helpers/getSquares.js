export const getSquares = (squares) => {
  let set = [], range = squares;

  for(var i = 1; i <= range; i++){
      set[i]= i;
  }
  return set
}