/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

// 思路：两数之和即：a + b = target，则 a = target - b，所以我们新建一个对象，在循环遍历数组的时候，
// 把target - arr[i]做为对象的键，意思就是arr[i]，需要找一个值位target - arr[i]的数，它们之和为target，
// 如果对象存在一个键为arr[i]，则表示有一个数正在寻找它，它们之和恰好为target，所以返回arr[i]，和键arr[i]对应的值
// 时间复杂度为O(n)，空间复杂度为O(n)
function twoAdd(arr, target) {
  if (!Array.isArray(arr)) {
    return
  }
  let obj = {}
  for(let i =0; i <arr.length; i++) {
    obj[target - arr[i]] = i
    if (obj[arr[i]] !== undefined) {
      console.log(obj)
      return [obj[arr[i]], i]
    }
  }
  
}

let arr = [2, 11, 7, 15], target = 9

console.log(twoAdd(arr, target))

// 暴力破解，双重for循环，事件复杂度位O(n2)
function twoAdd1(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(i,j)
      if (arr[i] + arr[j] === target) {
        return [i ,j]
      }
    }
  }
}
console.log(twoAdd1(arr, target))
