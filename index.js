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
