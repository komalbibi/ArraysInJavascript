// Array.isArray() 
 
let input = prompt("Type something (e.g., Hello, [1,2,3], {name:'Ali'})");

try {

    let value = eval(input);
if (Array.isArray(value)) {
        alert("Yes, it’s an array");
    } else {
        alert("No, not an array");
    }
} catch (e) {
    alert("Invalid input");
}
