// Math Object
// Some Properties
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);
// Methods
console.log(Math.ceil(1.34435));

// String 
// primitive to object
let firstName='Dilshad';
console.log(firstName.length);

// create an object
let lastName=new String('Alam');

console.log(lastName);

// Date
// 5 Ways
let date=new Date();
console.log(date);

let date2=new Date("January 5,2003 07:24");
console.log(date2);

let date3=new Date(2003,1,7);
console.log(date3);

date3.setFullYear(2004);
console.log(date3);


// Arrays
let numbers=[1,4,5,7];
console.log(numbers);
// insert element at end
numbers.push(10);
console.log(numbers);

// insert at begin
numbers.unshift(12);
console.log(numbers);

// insert at middle
numbers.splice(2,0,'a','b','d');
console.log(numbers);
console.log(numbers[2]);

// Searching
let num=[2,3,6,5,12];
console.log(num.indexOf(12));
console.log(num.indexOf(3));

// search element in an array
// method 1
if(num.indexOf(5)!=-1)
console.log("Number is present");
else console.log("Number is not present");

// method 2 for searching
console.log(num.includes(12));

// method 3 
console.log(num.indexOf(6,2));


// 
let courses=[    {no:1, name1:'Math'},
{no:2, name2:'Hindi'}
]
console.log(courses);

//  isme hmlog primitive ke jaisa search ni kr skte hai
console.log(courses.indexOf({no:1,name1:'Math'}));
console.log(courses.includes({no2:2,name2:'Hindi'}));
console.log(courses.includes({no2:2,name2:'English'}));

//
let course=courses.find(function(course)
{
    // return course.name1==='Math';
    // return course.name1==='Hindi';
    return course.name1==='English';
}
)

console.log(course);