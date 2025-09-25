// flat()
let arr = [1, [2, 3], [4, [5, 6]]]
let input = +prompt("How many levels do you want to flatten? (1 or 2)")
let flatArray = arr.flat(input)
alert(flatArray)