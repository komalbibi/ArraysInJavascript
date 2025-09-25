// 1. Push Assignment

let arr = []
arr.push("apple")
console.log(arr);
arr.push("Banana")
console.log(arr);
arr.push("Mango")
console.log(arr);
//------------------------------------------------------------------
// 2. Pop Assignment

let colors = ["red", "green", "blue", "yellow"]
colors.pop()
console.log(colors);
//-------------------------------------------------------------------
// 3. Unshift Assignment

let numbers = [10, 20, 30];
numbers.unshift("0")
console.log(numbers);
//----------------------------------------------------------------------
// 4. Shift Assignment

let languages = ["JavaScript", "Python", "C++", "Java"];
languages.shift()
console.log(languages);
//----------------------------------------------------------------------
// 5. Splice Assignment

let animals = ["cat", "dog", "elephant", "lion", "tiger"];
animals.splice(2,1)
console.log(animals);
animals.splice(2,0,"cow")
console.log(animals);
//-------------------------------------------------------------------------
// 6. Slice Assignment

 let cities = ["Peshawar", "Lahore", "Karachi", "Islamabad", "Quetta"];
 console.log("Original Array")
 console.log(cities)
 console.log("Sliced Array")
console.log(cities.slice(0,3));
