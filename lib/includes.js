const includes = (collection, num, index=0) => {
  var iCollection = 0
  var iNum = 0
  var counter = 0
  var type = typeof num == 'string'
  var len = num.length
  for(  var key in collection){
    if(index <= iCollection ){
      if (type) {
        for (var i = 0; i < len; i++) {
          if ((collection[key] === num[i]) && (iNum >= i)) {
            iNum = iCollection
            ++counter
            if (counter == len) {return true}
          }
        }
      }else{
        if (collection[key] === num) {return true}
      }
    }
    iCollection++
  }
  
  return false 
}

export { includes }
 