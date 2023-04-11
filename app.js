//Qno1: Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// function sum (number1) {
//     return function (number2) {
//         console.log(number1 + number2);
//     }}
// let total = sum(5)
// total(5);


//Qno2: Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// function arraySearch(array, value) {
//   // base case: if array is empty, return false
//   if (array.length === 0) {
//     return false;
//   }
//   if (array[0] === value) {
//     return true;
//   }
//   // recursive case
//   return arraySearch(array.slice(1), value);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arraySearch(arr, 6)); // false
// console.log(arraySearch(arr, 3)); // true


//Qno3: Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// function add(text) {
//   const newParagraph = document.getElementById("para"); 
//   const content = document.createTextNode(text); 
//   newParagraph.appendChild(content); 
//   document.body.appendChild(newParagraph); 
// }
// add('A new paragraph is added to the bottom of the HTML document!'); //Argument


//Qno4:Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// function addListItem(text) {
//       let ul = document.getElementById("list");
//       let li = document.querySelector("li");
//       li.appendChild(document.createTextNode(text));
//       ul.appendChild(li);
//     }

//     addListItem("Node JS");


//Qno5: Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// function changeBackgroundColor(element, color,) {
//       element.style.backgroundColor = color;


//     }

//     const newPara = document.getElementById('newPara');
//     changeBackgroundColor(newPara, 'grey');


//Qno6: Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


// function saveObjectToLocalStorage(key, object) {
//       // Convert the object to a JSON string
//       const objectJSON = JSON.stringify(object);

//       // Save the JSON string to localStorage
//       localStorage.setItem(key, objectJSON);
//     }

//     const myObject = {
//        name: "Furqan",
//       age: 17,
//       city: "Karachi"
//        };
//     saveObjectToLocalStorage("myKey", myObject);


//Qno7: Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function saveObjectToLocalStorage(key, object) {

//       const objectJSON = JSON.stringify(object);


//       localStorage.setItem(key, objectJSON);
//     }

//     const myObject = { 
//     name: "Ameen",
//     age: 30,
//     city: "Lahore",
//      };
//     saveObjectToLocalStorage("myKey", myObject);


//     function getObjectFromLocalStorage(key) {

//       const objectJSON = localStorage.getItem(key);


//       if (!objectJSON) {
//         return null;
//       }


//       return JSON.parse(objectJSON);
//     }


//Qno8: Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


// function saveObjectToLocalStorage(obj) {
//   // Save each property to localStorage using property name as key and value as value
//   Object.keys(obj).forEach(key => {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
//   });

//   // Retrieve the object from localStorage and return it as a new object
//   const newObj = {};
//   Object.keys(obj).forEach(key => {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   });
//   return newObj;
// }

// const myObj = {name: 'Ikhlass', age: 20};
// const savedObj = saveObjectToLocalStorage(myObj);
// console.log(savedObj); 