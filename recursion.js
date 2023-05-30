/** product: calculate the product of an array of numbers.
 * [2,3,4] -> 24
*/

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words.
 * ["hello", "hi", "hola"] -> 5
*/
//[] = 0
function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    longestWord = longest(words.slice(1));
    if (words[0].length > longestWord) {
      return words[0].length;
    } else {
      return longestWord;
    }
  }

}

/** everyOther: return a string with every other letter.
 * "hello" -> "hlo"
*/
// "" = ""
// "o" = "o"
// "llo" = "lo"
// "hello" = "hlo"
function everyOther(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str[0] + everyOther(str.slice(2));
  }

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) {
    return false;
  } else {
    if (arr[0] === val) {
      return true;
    } else {
      return find(arr.slice(1), val);
    }
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// "" = true
// "a" =true
// "ab" = false
// "aba" = true
// "tacocat" = true
// "acoca"
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length-1))
    } else {
      return false;
    }
  }
}

/** revString: return a copy of a string, but in reverse.
 * "k"
 * "ck"
 * "uck"
 * "duck"
*/

function revString(str) {
  if (str === "") {
    return ""
  } else {
    return revString(str.slice(1)) + str[0];
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present).
 * val = 1 arr = [] return -1
 * val = 1 arr = [1] return 0
 * val = 1
 *
 * [1]
 * [2]
 * [3]
*/

function findIndex(arr, val) {
  if (arr.length === 0){
    return -1;
  } else{
    // console.log("arr[arr.length - 1]=", arr[arr.length - 1], "val=", val);
    if (arr[arr.length - 1] === val){
      if (findIndex(arr.slice(0, arr.length -1), val ) !== -1){
        return findIndex(arr.slice(0, arr.length -1), val );
      } else{
        return arr.length - 1;
      }
    } else {
      return findIndex(arr.slice(0, arr.length -1), val );
    }
  }
}

/** gatherStrings: given an object, return an array of all of the string values.
 *
*/

function gatherStrings(obj) {
  //iterate over keys in object
  // if val is obj, call gatherStrings on val
  //else, if val is a string, push to array
  //return array
  const arr =[];
  for (const key in obj) {
    if (typeof(obj[key]) === "object") {
      arr.push(...gatherStrings(obj[key]));
    } else if (typeof(obj[key]) === "string") {
      arr.push(obj[key]);
    }
  }
  return arr;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  const middle = Math.floor(arr.length / 2);
  if (arr.length === 0) {
    return false;
  }
  if (arr[middle] === val) {
    return true;
  } else if (arr[middle] > val) {
    console.log("Arr[middle] > val")
    return binarySearch(arr.slice(0, middle), val);
  } else if (arr[middle] < val) {
    console.log("Arr[middle] < val")
    return binarySearch(arr.slice(middle + 1, arr.length), val);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
