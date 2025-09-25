// 5. reverse() 

  let city = prompt("Enter five cities name, separated by comma")
  let newCity = city.split(",")
  let reverseOrder = newCity.reverse()
  alert("Cities in reverse order " + reverseOrder)