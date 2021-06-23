//1. Write a JavaScript program that accept two integers and display the larger in the console.

let a = 10;
let b = 1;

if (a > b) {
    console.log(`${a} This integer are larger! `)
} else(a < b) 
    console.log(`${b} This integer are smallest!`)
/*2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display the specified sign in the console. 
Sample numbers : 3, -7, 2
Output : The sign is -*/

let x = 3;
let y = -7;
let z = 2;

let product = x*y*z;
let sign = (product < 0) ? '-' : '+';
sign = (product === 0) ? 'Neither' : sign;

console.log(sign);

if (x + y + z >= 0) {
    console.log('The sign is +');
} else if(x < 0 && y < 0 && z < 0) {
    console.log('The sign is +');
} else {
    console.log('The sign is -');
}

/*3. Write a JavaScript conditional statement to sort three numbers. Display the result in the console
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

const mySort = [0, -1, 4];
mySort.sort();


const myArray = [0, -1, 4];
myArray.sort(function(a,b) {
    return b-a;
});

/*const sorted = [0, -1, 4].sort((a,b) => a - b);
console.log(sorted);*/

/*4. Write a JavaScript conditional statement to find the largest of five numbers.Display the result in the console. 
Sample numbers : -5, -2, -6, 0, -1
Output : 0*/
a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}


function getLargest(...)
