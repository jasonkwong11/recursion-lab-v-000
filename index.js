function printString(string) {
  console.log(string[0]);

  if(string.length > 1) {
    let substring = string.substring(1, string.length);
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if(string === undefined || string.length <= 1) {
    return string
  }
  return reverseString(string.substring(1)) + string.charAt(0);
}

function isPalindrome(str) {
  if(str.length <= 1) { return true };
  
  let first = str[0]
  let last = str[str.length - 1]

  if(first == last){
    let substring = str.slice(1, str.length - 1)
    return isPalindrome(substring)
  } else {
    return false
  }
}

function addUpTo(arr, i) {
  if (i == 0){
    return arr[0]
  } else {
    return addUpTo(arr, i - 1) + arr[i]
  }
}

let arr = [1, 3, 2, 1]

function maxOf(arr) {
  if(arr.length === 1) {return arr[0]}
  return Math.max(arr.pop(), maxOf(arr)) 
}

function includesNumber(arr, num) {
  if(arr.length === 0) { return false };
  if(arr[0] === num) { return true };
  return includesNumber(arr.slice(1), num);
}
