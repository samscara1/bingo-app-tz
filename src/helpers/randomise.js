export const randomise = (min, max, number, oddToggle) => {
  const nums = new Set()
  while(nums.size !== number) {
    const num = (Math.floor(
      Math.random() * (max - min) + min
    ))
    if (oddToggle === 'even') {
      if (num%2 === 1) {
        nums.add(num)
      }
    } else if (oddToggle === 'odd') {
      if (num%2 === 0) {
        nums.add(num) 
      }
    } else{
      nums.add(num);
    }
  }
  return Array.from(nums)
}