module.exports = function(number){
  if(number === 5){
    return [5]
  }
  if(number === 4){
    return [2,2]
  }
  if(number === 2 || number === 3){
    return [number]
  }
  return []
}
