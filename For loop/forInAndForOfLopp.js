// Given an object representing a person, 
// loop through its properties using for...in and print each property and its value.
let person = {
    name: "John",
    age: 25,
    country: "USA"
  };
  
  // Your code here
  for(let key in person)
  {
    console.log(key,person[key]);
  }
  
  // Given an array of colors, loop through the array using for...in and print each color.
let colors = ["red", "green", "blue", "yellow"];

// Your code here
for(let key in colors)
{
    console.log(key,colors[key]);
}

// for of loop practice
// Given an array of numbers, loop through the array using for...of and print each number.
let numbers = [1, 2, 3, 4, 8];
for(let key of numbers)
{
    console.log(key);
}

// Your code here
// Given a string, loop through the string using for...of and print each character.
let message = "Hello, World!";
for(let key of message)
{
    console.log(key);
}
// Your code here
