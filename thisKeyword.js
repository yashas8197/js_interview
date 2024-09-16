//this keyword
//this in global space
"use strict";

// gives global object in this case it gives window object
console.log(this);

/* ------------------------------------------- this keyword in function declaration ------------------------------------------------- */

//this keyword inside function declaration
function x() {
  console.log(this);
}
x();

// Sloppy mode
// this keyword gives window object

// what will be the value of this keyword inside the function?
// The value of this keyword inside the function will be undefined but because of "this substitution the value becomes window object in sloppy mode"

//Strict mode
// this keyword gives undefined

/* ------------------------------------------------ How the function is called ---------------------------------------------------------- */

function y() {
  console.log(this);
}
y(); // undefined
window.y(); // window object

// In sloppy mode calling function in both ways gives window object
// In strict mode calling function in window.y() gives window object and calling function by y() gives undefined;

/* ------------------------------------------- this keyword inside object method -------------------------------------------------- */

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // {a: 10, x: ƒ}

// Both in sloppy and strict modes it gives obj

/* ---------------------------------------------this inside arrow function ------------------------------------------------------ */

/* 
    Arrow function does not have its own this they take the value of this from their lexical envirnoment in which they are unclosed.
*/

/* 
    In this case the person object is in global space the lexical envirnoment is global space so the this keyword takes window or golbal object as this keywords.
*/

const person = {
  name: "peter",
  age: 25,
  address: () => {
    console.log(this); // window object
  },
};

person.address();

// Both in sloppy and strict mode this keyword it gives window object

/* ---------------------------------------------- this keyword in nested object ----------------------------------------------- */

const developer = {
  name: "yashas",
  age: 24,
  address: function () {
    const street = () => {
      console.log(this); // {name: 'yashas', age: 24, address: ƒ}
    };
    street();
  },
};

developer.address();

// Bith in sloppy and strict mode this keyword takes developer object

/* 
    as the arrow function is within another function the lexical envirnoment of the arrow function street is developer object hence it takes lexical this that is devloper object
*/

/* 
                                                   sloppy mode             strict mode
--------------------------------------------------------------------------------------
this keyword in function declaration                 window obj             undefined
function is called by <function_name>()              window obj             undefined
function is called by window.<function_name>()       window obj             window obj
this keyword inside obj method                       parent obj             parent obj
this inside arrow function                           window obj             window obj
this keyword in nested obj                           lexical obj            lexical obj



*/
