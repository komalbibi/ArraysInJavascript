// 1. indexOf() 

let colors = ["red", "blue", "green", "yellow", "blue"]; 
let colorName = prompt("Enter a color name");
let index = colors.indexOf(colorName)
if(index !== -1){
    alert("Color " + colorName + " found at index " + index)
}
else{
alert("Color not found")
}