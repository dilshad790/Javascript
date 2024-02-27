// Create an object representing a person with properties like name, age, and country. Print each property to the console.
function Person(name,age,country)
{
    this.name=name,
    this.age=age,
    this.country=country
}
let obj=new Person('Dilshad',20,'India');
console.log(obj);
