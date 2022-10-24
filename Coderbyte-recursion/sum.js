function recursiveSum(arr){
    //my base case 
    if (arr.length == 0) return 0
    const firstElement = arr[0]
    const restElement = arr.slice(1)
    return firstElement + recursiveSum(restElement)
}

console.log('sum is == ',recursiveSum([1,5,7,-2]))