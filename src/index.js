module.exports = (...array) => {
  if(!Array.isArray(array)) array = Array.from(array)
  array = array.flat()
  return Math.max(...array)
}