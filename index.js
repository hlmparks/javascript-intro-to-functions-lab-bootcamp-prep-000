function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    console.log()
  }
  else if (string.toUpperCase() === string) {
    console.log()
  }
  else ("I love you, Grandma.")
    console.log("I love you, too.")
}
