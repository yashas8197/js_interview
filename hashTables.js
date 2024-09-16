// Find the first non-repeating character in a string.
// Problem: Given a string, find the first character that does not repeat.

const str = "aabcbdef";
function findNonRepeatingChar(s) {
  let hashTable = {};
  for (let str of s) {
    hashTable[str] = (hashTable[str] || 0) + 1;
  }

  for (let key in hashTable) {
    if (hashTable[key] === 1) {
      return key;
    }
  }

  return null;
}

console.log(findNonRepeatingChar(str));

// Check if two strings are anagrams.
// Problem: Determine if two strings are anagrams of each other using a hash table.

const string1 = "listen";
const string2 = "silenl";

function checkAnagram(str1, str2) {
  const hashTable1 = {};
  const hashTable2 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let str of str1) {
    hashTable1[str] = (hashTable1[str] || 0) + 1;
  }

  for (let str of str2) {
    hashTable2[str] = (hashTable2[str] || 0) + 1;
  }

  for (let key in hashTable1) {
    if (hashTable1[key] !== hashTable2[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram(string1, string2));

// Count the frequency of elements in an array.
// Problem: Given an array, count the occurrences of each element.

function countOccurance(arr) {
  const hashTable = {};

  for (let element of arr) {
    hashTable[element] = (hashTable[element] || 0) + 1;
  }

  return hashTable;
}
const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countOccurance(array));

// 4. Find all pairs with a given sum.
// Problem: Given an array and a target sum, find all pairs of elements that add up to the target.

const arr = [1, 2, 3, 4, 3, 2, 1];
const target_sum = 7;

function findPairsWithSum(arr, target) {
  const hashTable = {};
  const pairs = [];

  for (let element of arr) {
    let compliment = target - element;

    if (hashTable[compliment] !== undefined) {
      pairs.push([compliment, element]);
    }

    hashTable[element] = true;
  }

  return pairs;
}

console.log(findPairsWithSum(arr, target_sum));

// . Find duplicates in an array.
// Problem: Given an array, find all the duplicate elements using a hash table.

const arr1 = [4, 2, 7, 2, 8, 4, 3, 9, 4, 3];

function findDuplicates(arr) {
  const hashTable = {};
  const duplicate = [];
  for (let element of arr) {
    hashTable[element] = (hashTable[element] || 0) + 1;
  }

  for (let key in hashTable) {
    if (hashTable[key] > 1) {
      duplicate.push(key);
    }
  }

  return duplicate;
}

console.log(findDuplicates(arr1));

// Intersection of two arrays.
// Problem: Find the common elements between two arrays.

function findIntersection(arr1, arr2) {
  const hashTable = {};
  const result = [];

  for (let num of arr1) {
    hashTable[num] = true;
  }

  for (let num of arr2) {
    if (hashTable[num]) {
      result.push(num);
      delete hashTable[num];
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log(findIntersection(array1, array2));

// Union of two arrays.
// Problem: Find the union of two arrays (i.e., all unique elements from both arrays).

function unionOfArray(arr1, arr2) {
  const hashTable = {};
  const output = [];
  for (let num of arr1) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }
  for (let num of arr2) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  for (let key in hashTable) {
    output.push(+key);
  }

  return output;
}

const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];

console.log(unionOfArray(array3, array4));

// Check for pair with a given difference.
// Problem: Given an array and a target difference, check if there exists a pair with that difference.

function hasPairWithDifference(arr, diff) {
  const hashTable = {};
  const pairs = [];
  for (let num of arr) {
    const compliment = num - diff;
    if (hashTable[compliment] !== undefined) {
      pairs.push([compliment, num]);
    }

    if (hashTable[num + diff] !== undefined) {
      pairs.push([num + diff, num]);
    }

    hashTable[num] = true;
  }

  return pairs;
}

const array5 = [1, 5, 9, 12];
const targetDiff = 4;

console.log(hasPairWithDifference(array5, targetDiff));

// Check for pair with a given difference.
// Problem: Given an array and a target difference, check if there exists a pair with that difference.

// two - pointer method
function findSubarrayWithSum(arr, targetValue) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > targetValue && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === targetValue) {
      return arr.slice(start, end + 1);
    }
  }

  return null;
}

let arr2 = [1, 2, 3, 7, 5];
let k = 10;

console.log(findSubarrayWithSum(arr2, k));

// Check if two arrays are disjoint.
// Problem: Check if two arrays have no common elements.

function areArraysDisjoint(arr1, arr2) {
  const hashTable = {};

  for (let num of arr1) {
    hashTable[num] = true;
  }

  for (let num of arr2) {
    if (hashTable[num]) {
      return false;
    }
  }

  return true;
}

const array12 = [1, 2, 3, 4];
const array22 = [5, 6, 7, 8];

console.log(
  `Are array1 and array2 disjoint? ${areArraysDisjoint(array12, array22)}`
);

// Find the first repeated character in a string.
// Problem: Given a string, find the first character that repeats.

function firstRepeatChar(str) {
  const hashTable = {};

  for (let char of str) {
    hashTable[char] = (hashTable[char] || 0) + 1;

    if (hashTable[char] > 1) {
      return char;
    }
  }
  return null;
}

let str33 = "yashas";
console.log(firstRepeatChar(str33));

// Group anagrams together.
// Problem: Given an array of strings, group the anagrams together using a hash table.

function groupAnagrams(strs) {
  const hashTable = {};

  for (let str of strs) {
    const splitStr = str.split("");
    const sortedStr = splitStr.sort().join("");

    if (!hashTable[sortedStr]) {
      hashTable[sortedStr] = [];
    }

    hashTable[sortedStr].push(str);
  }

  return hashTable;
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);

console.log(result);

// Two Sum problem.
// Problem: Given an array and a target sum, find two numbers in the array that add up to the target.

function twoSum(nums, target) {
  const hashTable = {};
  const sum = [];
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (hashTable[compliment] !== undefined) {
      sum.push([hashTable[compliment], i]);
    }

    hashTable[nums[i]] = i;
  }

  return sum;
}

const input22 = [2, 7, 2, 11, 15];
const target22 = 9;
const result22 = twoSum(input22, target22);

console.log("Indices of the two numbers that add up to the target:", result22);

// s Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (char === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique("hello"));
