// String Methods

//1)  Write a loop to count how many characters are in the string 
// "hello world" without using .length

//let a="hello world";
// let counter=0;
// for(let b of a){
//     counter++
// }
// console.log(counter)


//2) Use a loop to reverse the string "javascript"
//  and store the result in a new string.

// let a="hello"
// let b="";
// for(i=a.length-1;i>=0;i--){
//     b=a[i]
//     console.log(b)
// }



//3) Count how many vowels (a, e, i, o, u) appear in the string "programming is fun".

// let str="programming is fun"
// let count=0
//let vowels="aeiou"
// for(i=0;i<str.length;i++){
//     let ch=str[i]
//     //if(vowels.includes(ch))
//     if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
//     {
//         count++
//     }
// }
//   console.log(`The vowel count is the word:${count}`)



//4)  Uppercase Each Character:
// Loop through the string "loop" and create a new string with all letters in
//  uppercase (without using .toUpperCase() directly on the whole string).

// let str = "javascript";
// let res = "";
// for ( i = 0; i < str.length; i++) {
//   let up= str.charCodeAt(i);
//   if (up >= 97 && up <= 122) {
//     up =up- 32; 
//   }
//   res =res+ String.fromCharCode(up);
// }
// console.log(res);

//======================================================================================================



//========================================= Practice array methods =====================================
//1)push method
//1
// let arr=[]
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.pop()
// console.log(arr)

//2
// let a=[]
// let b=prompt("enter number")
// if( b%2==0){
//     a.push("even")
// }
// else
// {
//     a.push("odd")
// }
// console.log(a)


//3
// let arr=[]
// let b=parseInt(prompt("Enter a number:"))
// for(let i=1;i<=b;i++){
//     if(i%3==0){
//     arr.push("fizz")
//     }
//     else if(i%3==0 && i%5==0){
//     arr.push("fizzbuzz")
//     }
//     else if(i%5==0){
//     arr.push("buzz")
//     }
//     else{
//     arr.push(i)
//     }
// }
// console.log(arr)



//2)pop()
// let arr=[1,2,3,4,5,6,7,8,9,10]
// // let a=[]
// arr.pop()
// arr.pop()       //remove the last element
// arr.pop()
// console.log(arr)  


// let fruits=["mango","cherry","orange","apple","grapes"]
// fruits.pop()
// console.log(fruits)
// fruits.pop()
// console.log(fruits)


//3) shift()

// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.shift()
// console.log(arr)    //remove the first element


// let fruits = ["apple", "banana", "orange"];
// let ff= fruits.shift();
// console.log(ff);  
// console.log(fruits);  

// let fruits=["apple","grapes"]
// fruits.shift()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

//4)unshift()

// let a=["hi",1,"jaya",2,3,4,5]
// a.unshift(6,7,"welcome")  .//add the element at first
// console.log(a)


// let arr = [];
// let input = prompt("Enter a word:");
// arr.unshift(input,"welcome to the world");
// console.log(arr);


// let fruits=["apple","grapes"]
// fruits.unshift("banana")
// console.log(fruits)
// fruits.unshift("cherry")
// console.log(fruits)
// console.log(fruits.length)

//5)splice()

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits)
// fruits.splice(0,3,"jaya");  //edit the array (add and remove the elements)
// console.log(fruits)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2);
// console.log(fruits)

// let fruits=["apple","grapes","banana","cherry","mango","strawberry"]
// fruits.splice(0,2)
// console.log(fruits)
// fruits.splice(0,2,"orange")
// console.log(fruits)
// console.log(fruits.length)


//6)slice
// const fruits = ["Banana", "Orange", "cherry", "Apple", "Mango"];
// const ns = fruits.slice(4);   //slice the element and print
// console.log(ns)


// const fruits = ["Banana", "Orange", "gova", "Apple", "Mango"];
// const ns = fruits.slice(0, 2);  
//  console.log(ns)


// let fruits=["apple","grapes","banana","cherry","mango","strawberry"]
// let sl=fruits.slice(-2)
// console.log(sl)  //last element index -1







