// . at() 
// • Ask the user to enter any index number. 
// • Array: 
// • let languages = ["JavaScript", "Python", "C++", "Java"]; 
// • Use .at(index) to get the value. 
// • Alert: "Language at index is: ..." 
let languages = ["JavaScript", "Python", "C++", "Java"]
let index = prompt("Enter any index number 0 to " + (languages.length-1) + " ")
let Language = languages.at(index)
alert("Language at index " + index + " is: " + Language)
