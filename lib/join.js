const join = (arr, str = ",") => {
  var finStr = ""
  if (typeof arr == 'String' || Array.isArray(arr) ) {
    var len = arr.length -1 // 2  
    for ( var i = 0; i <= len; i++ ) {
      if (i == len) {
        return finStr += arr[i]
      }
      finStr += arr[i] + str
    }
  }else{
    return []
  }
}

export { join }
 