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

let d = 0;
let e = -1;
let f = 4;

if(d < e && e < f) 
