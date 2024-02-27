// console.log('Chalie suru krte h');

// let rectangle ={
// length:1,
// breadth:4
// };

// Factory function -return an object

function createRectangle(len,bre)
{
    return rectangle={
        length:len,
        breadth:bre,

        draw()
        {
            console.log('Drawing rectangle');
        }

    };
}

let x=createRectangle(6,8);
console.log(x.breadth)
console.log(x.length)
console.log(x.draw())


// constructor function
function Rectangle()
{
    this.length=2;
    this.breadth=5;
    this.draw=function ()
    {
        console.log("drawing a rectangle");
    }
}

// object created and constructor function called
let obj2=new Rectangle();

// Dynamic object

// new property added
obj2.color='Red';

// deleted color property 
delete obj2.color;

// Types in JS
// Primitive types
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// // refrence Types
// let c={value:10};
// let d=c;
// c.value++;
// console.log(c.value);
// console.log(d.value);

// Pass by refrences
function inc(a)
{
    a.value++;
}
let a={value:10};
inc(a);
console.log(a.value);

// uses of for-in loop
let rectangle2={
    length:5,
    breadth:10
}

for(key in rectangle2)
{
    console.log(key,rectangle2[key]);
}

// For of loop
// generally used in arrays and map
// but it can be used in object by some technique
for(let key of Object.keys(rectangle2))
{
    console.log(key);
}

for(let key of Object.entries(rectangle2))
{
    console.log(key);
}

// if i want check properties present or not in an object
if('color' in rectangle2)
{
    console.log('Present');
}
else{
    console.log('Absent');
}

let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

// Object cloning
// 1>iteration
// let src={value:10};
// let dest={};
// for(let key in src)
// {
    //     dest[key]=src[key];
    // }
    
    // for(let key of Object.entries(src))
    // {
        //     console.log(key);
        // }
        
        // for(let key of Object.entries(dest))
        // {
            //     console.log(key);
            // }
            
            //         // 2>assign
    //         let src={value:10};
    //         let dest=Object.assign({},src);
    
    //         for(let key of Object.entries(src))
    // {
        //         console.log(key);
        //     }
        
        //     for(let key of Object.entries(dest))
    //     {
        //             console.log(key);
        //         }
        
        // 3 spread
        
                let src={value:10};
            let dest={...src};
           console.log(dest);
           