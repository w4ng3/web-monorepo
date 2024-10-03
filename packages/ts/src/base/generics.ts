// 泛型的特点就是带有“类型参数”

function comb<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

comb([1], [2]) // number[]
