
// outer:
// for (let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(j===2)continue outer;
//         console.log(i,j);
//     }
// }
//whenever j==2 it skip's the outer loop's next iteration
//output: 1 1
//        2 1
//        3 1



//Sum of even numbers

// let i=2;
// let sum=0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     sum =sum+i;
//   }
//   i++;
// }
// console.log("Sum of even numbers:", sum);



//practice

//1
// Print all numbers  1-50, but skip multiple 5.

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }



//2
// print multiplication table of 7
// let num = 7;
// for (let i  = 1; i<=10; i++){
//     console.log(${num} x ${i} = ${num*i});
// }



// 3
// find the sum of all odd numbers upto 100

    // let sum = 0;
    // for(let i = 1; i <=100; i++){
    //     if( i % 2 !=0){
    //         sum+=i;
    //     console.log(i)
    //     }
       
    // }
    //  console.log("sum of odd numbers:",sum)



// 4
// Display characters of a string one by one using for...of.
// one way default 
// for (let char of "BaMu"){
// console.log(char);
// }
// another one way user input
// let name = prompt("Enter your name i print the all characters! : ")
// for (let char of name){
// console.log(char);
// }



// 5
// Use switch to print month name based on month number.
// let month=Number(prompt("Enter the month number: "));
// switch (month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;  
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;  
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;  
//     default:
//         console.log("Invalid month number");
//         break;
// }




//6
//Print a pattern of stars using nested for loops.
// let n=5;
// let pattern = "";
// for (let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         pattern+="* "
//     }
//     pattern+="\n"
// }
// console.log(pattern)





// Number Guessing Game

// const number = 5;
// let guessingNumber;
// let attempts = 0;
// while(true) {
//     guessingNumber = parseInt(prompt("Guess a number between 1 to 10: "));
//     attempts++;
//     if (guessingNumber === number) {
//         alert(`Congratulations! You guessed the number ${number} in ${attempts} attempts.`);
//         break;
//     } else if (guessingNumber < number) {
//         alert("Too low! Try again.");
//     } else {
//         alert("Too high! Try again.");
//     }
// }




//Write a program that gets a number n from the user. The task is to print the number
//  from 1 to n by mentioning it as odd or even number.

// let num=Number(prompt("Enter the number of N:"));
// for(i=1;i<=num;i++)
//   if(i%2==0){
//     console.log("The number is Even ",i)
//   }
//   else{
//     console.log("The number is Odd ",i)
//   }

  


//Get a number input n from the user. Print the numbers 1 to n with the
// following conditions:
// ● Print Fizz - if the number is divisible by 3
// ● Print Buzz - if the number is divisible by 5
// ● Print FizzBuzz - if the number is divisible by both 3 and 5
// ● Print the number itself - if all the above condition fails
// let b = parseInt(prompt("Enter The Number :"));
// let a = []
// let c;
// for (let i = 1; i <= b; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         c = "FizzBuzz"
//         // a += c
//          a.push(c)
//     } else if (i % 3 == 0) {
//         c = "Fizz"
//         //a += c
//         a.push(c)
//     } else if (i % 5 == 0) {
//         c = "Buzz"
//        // a += c
//         a.push(c)
//     } else {
//         c = i
//        // a += c
//         a.push(c)
//     }
// }
// console.log(a)



//Get a number as input from the user. Check whether the number is odd
//number or even number.
// let i=prompt("Enter the number:");
// if(i%2==0){
//     console.log("Number is Even ")
// }
// else{
//       console.log("Number is Odd ")
// }



//Get 3 numbers from the users as num1, num2, num3. Check which one is the
//largest number.
// let a=prompt("enter first number:");
// let b=prompt("enter second number:");
// let c=prompt("enter third number:");
// if(a>b && a>c){
//     console.log("a is big=",a);
// }
// else if(b>c && b>a){
//      console.log("b is big=",b);
// }
// else{
//      console.log("c is big=",c);
// }
// console.log(`a=${a}`,`b=${b}`,`c=${c}`)



//Get a number from the users. Check whether the number is divisible by 8.
// let num=prompt("enter number:");
// if(num%8==0){
//     console.log("The given number divisible by 8.");
// }
// else{
//      console.log("The given number not divisible by 8.");
// }



//Get a number from the users. Check whether the number is divisible by both 3
//and 5.
// let a=prompt("Input:");
// if(num%3==0 && num%5==0){
//     console.log("Its divisible by both 3 and 5");
// }
// else if(num%3==0){
//      console.log("Its divisible by 3 not divisible by 5");
// }
// else if(num%5==0){
//      console.log("Its divisible by 5 not divisible by 3");
// }
// else{
//     console.log("Its not divisible both 3 and 5");
// }




//Get 5 numbers as input from user and store it in the variable a, b, c, d, e.
// Execute the following operation and display the result a + b - c * d / e
// let a=Number(prompt("a="));
// let b=Number(prompt("b="));
// let c=Number(prompt("c="));
// let d=Number(prompt("d="));
// let e=Number(prompt("e="));
// let result=a+b-c*d/e;
//  console.log(`result=${result}`)
