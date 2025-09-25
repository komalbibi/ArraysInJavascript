// 3. includes()  

let courses = ["JavaScript", "Python", "C++", "Java"]; 
let userCourse= prompt("Enter a course name e.g: web development, digital marketing")
 let myCourse = courses.includes(userCourse)
 if(myCourse == true){
    alert("Yes, course available")
 }

 else{
    alert("No, not offered")
 }