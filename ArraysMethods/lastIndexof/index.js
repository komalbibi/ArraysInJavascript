//2. lastIndexOf() 
 
let color = ["red", "blue", "green", "yellow", "blue"]; 
let colorName = prompt("Enter a color name");
let indexNo = color.lastIndexOf(colorName)
if(indexNo !== -1){
    alert("Color " + colorName + " found at index " + indexNo)
}
else{
alert("Color not found")
}





