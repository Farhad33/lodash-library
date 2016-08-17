const difference = ( array1, array2) => {
  if (!Array.isArray(array1)) {
    return []
  }else if (!Array.isArray(array2)) {
    return array1
  }
  for(var index1 in array1) {
    for(var index2 in array2) {
      if (array1[index1] == array2[index2]) {
        array1.splice(index1, 1)
      }
    }
  }
return array1
}

export { difference }

