function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(20)

// Has a linear time complexity since loops are not nested.
// O(n + m)
function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ')
  var magazineArr = magazineText.split(' ')
  var magazineObj = {}

  // O(m)
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  })

  var noteIsPossible = true
  // O(n)
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPossible = false
    } else {
      noteIsPossible = false
    }
  })
  return noteIsPossible
}

harmlessRansomNote(
  'this is a secret note for you from a secret admirer',
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of ou must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip I have for you is to go early in the morning when it is not so hot out also note that you mst wear hiking boots this is one of the best places I have ever visited'
)

// Method not using Regex.
// Must remove all characters that are not letters.
// Must make all characters lowercase for comparison.
function isPalindrome(string) {
  string = string.toLowerCase()
  var charArr = string.split('')
  var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')

  var lettersArr = []
  charArr.forEach(char => {
    if (validChars.indexOf(char) > -1) lettersArr.push(char)
  })

  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true
  } else {
    return false
  }
}

isPalindrome('race car')

function caesarCipher(str, num) {
  // Do this to have values we can work with.
  num = num % 26
  var lowerStr = str.toLowerCase()
  var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var newStr = ''

  for (var i = 0; i < lowerStr.length; i++) {
    var currLetter = lowerStr[i]
    if (currLetter === ' ') {
      newStr += currLetter
      continue
    }
    var currIndex = alpha.indexOf(currLetter)
    var newIndex = currIndex + num
    // We are over the length of the alphabet.
    if (newIndex > 25) newIndex = newIndex - 26
    // We are under the length of the alphabet.
    if (newIndex < 0) newIndex = 26 + newIndex
    // Make the char UpperCase if it was originally so.
    if (str[i] === str[i].toUpperCase()) {
      newStr += alpha[newIndex].toUpperCase()
      // Else just add the character to the new string.
    } else {
      newStr += alpha[newIndex]
    }
  }
  return newStr
}

caesarCipher('zoo keeper', 2)

// Can't use array.reverse()
function reverseWords(str) {
  var wordsArr = str.split(' ')
  var reversedArr = []

  // for (var i = 0; i < wordsArr.length; i++) {
  //   var word = wordsArr[i]
  //   console.log(word)
  //   reversedArr.push(word.split('').reverse().join(''))
  // }
  // return reversedArr.join(' ')

  wordsArr.forEach(word => {
    var reversedWord = ''
    // Use for loop to run backwards through characters of word.
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]
    }
    reversedArr.push(reversedWord)
  })

  return reversedArr.join(' ')
}

reverseWords('this is a string of words')

// can't use array.reverse
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tempVar
  }
  return arr
}

reverseArrayInPlace([1, 2, 3, 4, 5])

function getMean(arr) {
  var sum = 0
  arr.forEach(val => {
    sum += val
  })
  var mean = sum / arr.length
  return mean
}

function getMedian(arr) {
  arr.sort((a, b) => a - b)
  var median

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)]
  } else {
    var mid1 = arr[arr.length / 2 - 1]
    var mid2 = arr[arr.length / 2]

    median = (mid1 + mid2) / 2
  }
  return median
}

function getMode(arr) {
  var mode = {}

  arr.forEach(num => {
    if (!mode[num]) mode[num] = 0
    mode[num]++
  })

  var maxFreq = 0
  var modes = []

  for (var num in mode) {
    if (mode[num] > maxFreq) {
      modes = [num]
      maxFreq = mode[num]
    } else if (mode[num] === maxFreq) {
      modes.push(num)
    }
  }

  if (modes.length === Object.keys(mode).length) modes = []

  return modes
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

meanMedianMode([9, 10, 23, 10, 23, 9])

// This solution runs as O(n)
function twoSum(numArray, sum) {
  var pairs = []
  var hashtable = []

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i]
    var counterPart = sum - currNum
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart])
    }
    hashtable.push(currNum)
  }
  // Return an array of 2 pair arrays.
  return pairs
}

twoSum([40, 11, 19, 17, -12], 28)

// O(log n)
function binarySearch(arr, key) {
  var midIndex = Math.floor(arr.length / 2)
  var midElement = arr[midIndex]

  if (midElement === key) {
    // Base Case
    return true
  } else if (midElement < key && arr.length > 1) {
    // Recursive case for top 1/2 of array.
    return binarySearch(arr.splice(midIndex, arr.length), key)
  } else if (midElement > key && arr.length > 1) {
    // Recursive case for bottom half of array.
    return binarySearch(arr.splice(0, midIndex), key)
  } else {
    // Does not exist in tree.
    return false
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)

// O(2^n)
function fibonacci(pos) {
  if (pos < 3) {
    return 1
  } else {
    return fibonacci(pos - 1) + fibonacci(pos - 2)
  }
}

fibonacci(8)

// O(n)
// Utilizing memoization.
function fibMemo(i, cache) {
  cache = cache || []
  if (cache[i]) {
    return cache[i]
  } else {
    if (i < 3) return 1
    else {
      cache[i] = fibMemo(i - 1, cache) + fibMemo(i - 2, cache)
    }
  }
  return cache[i]
}

fibMemo(50)

function sieveOfEratosthenes(n) {
  var primes = []
  for (var i = 0; i <= n; i++) {
    primes[i] = true
  }

  primes[0] = false
  primes[1] = false

  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var j = 2; j * i <= n; j++) {
      primes[i * j] = false
    }
  }

  var result = []

  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i)
  }

  return result
}

sieveOfEratosthenes(50)

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

bubbleSort([5, 3, 8, 2, 1, 4])

function mergeSort(arr) {
  // Base Case
  if (arr.length < 2) return arr
  // Recursive Case
  var midIndex = Math.floor(arr.length / 2)
  var firstHalf = arr.slice(0, midIndex)
  var lastHalf = arr.slice(midIndex)

  return merge(mergeSort(firstHalf), mergeSort(lastHalf))
}

function merge(arr1, arr2) {
  var result = []
  while (arr1.length && arr2.length) {
    var minElement
    if (arr1[0] < arr2[0]) {
      minElement = arr1.shift()
    } else {
      minElement = arr2.shift()
    }
    result.push(minElement)
  }
  if (arr1.length) {
    result = result.concat(arr1)
  } else {
    result = result.concat(arr2)
  }
  return result
}

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 8, 1])

function maxStockProfit(arr) {
  var maxProfit = -1
  var buyPrice = 0
  var sellPrice = 0

  var changeBuyPrice = true

  for (var i = 0; i < arr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = arr[i]
    }
    sellPrice = arr[i + 1]
    if (sellPrice < buyPrice) {
      changeBuyPrice = true
    } else {
      var tempProfit = sellPrice - buyPrice
      if (tempProfit > maxProfit) maxProfit = tempProfit
      changeBuyPrice = false
    }
  }
  return maxProfit
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42])
