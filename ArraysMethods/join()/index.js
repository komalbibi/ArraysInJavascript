// join() 

let words = prompt("Enter any three words e.g. I, am, student")
let wordsArray = words.split(",")
let sentence = wordsArray.join(" ")
alert(`Your sentence is ${sentence}`)
