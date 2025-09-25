//4. sort() 
let numbers = prompt("Enter any five numbers (Separated by comma)");
let newArray = numbers.split(",").map(Number);
newArray.sort((a, b) => a - b);
alert("Sorted Numbers: " + newArray);