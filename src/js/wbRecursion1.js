const reverseSentence = (string) => {   // I am a cat
  let arr = string.split(" ")           // ["I", "am", "a", "cat"]
  if (arr.length === 1){
    return arr[0]
  } else {
    return arr[arr.length - 1] + " " + reverseSentence(arr.slice(0, arr.length - 1).join(" "))
  }
}

// Quick Testing
console.log(reverseSentence("I am a cat"))
