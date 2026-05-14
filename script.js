/*
  JavaScript Basics Practice
  ==========================

  How to use this file:
  1. Read each short explanation.
  2. Run this file with:
       node script.js
  3. Complete the TASK sections directly in this file.
  4. Use console.log() often to check your answers.

  Topics covered:
  - variable declarations: var, let, const
  - naming variables
  - primitive types
  - reference types
  - objects and arrays
  - scope
  - block scope and function scope
  - hoisting
  - type conversion
  - comparison
  - practice tasks
*/

console.log("JavaScript Basics Practice");
console.log("==========================");

// ---------------------------------------------------------------------------
// 1. Variable Declarations
// ---------------------------------------------------------------------------

/*
  JavaScript has three main ways to declare variables:

  var:
    Older style.
    Function-scoped.
    Can be re-declared and re-assigned.
    Avoid it in modern JavaScript unless you are reading older code.

  let:
    Modern style.
    Block-scoped.
    Can be re-assigned.
    Use it when the value will change.

  const:
    Modern style.
    Block-scoped.
    Cannot be re-assigned.
    Use it by default when the value should not be replaced.
*/

var oldName = "old style";
let currentName = "modern style";
const language = "JavaScript";

console.log("var example:", oldName);
console.log("let example:", currentName);
console.log("const example:", language);

currentName = "updated modern style";
console.log("updated let:", currentName);

/*
  TASK 1:
  Create three variables:
  - firstName with your first name
  - age with your age
  - isStudent with true or false

  Use const when the value should not change.
  Use let if you plan to change the value later.

  Then print all three values.
*/

// Write your code here:

const firstName = "Guka";
let userAge = 30;
let isStudent = true;

/*
  TASK 2:
  Create a variable called score with value 10.
  Re-assign it to 20.
  Print the result.
*/

// Write your code here:
let score = 10;
score = 20;
console.log(score);

// ---------------------------------------------------------------------------
// 2. Variable Naming
// ---------------------------------------------------------------------------

/*
  Good variable names describe the value clearly.

  Good:
    userName
    totalPrice
    isLoggedIn
    maxAttempts

  Bad:
    x
    data
    thing
    aaa

  JavaScript usually uses camelCase for variable names.
*/

const userName = "Nino";
const totalPrice = 49.99;
const isLoggedIn = true;

console.log("naming examples:", userName, totalPrice, isLoggedIn);

/*
  TASK 3:
  Create variables for:
  - a product name
  - a product price
  - whether the product is available

  Use clear camelCase names.
*/

// Write your code here:
const productName = "Pepsi";
let productPrice = 2.9;
let isProductAvailable = true;

// ---------------------------------------------------------------------------
// 3. Primitive Types
// ---------------------------------------------------------------------------

/*
  Primitive values are simple values.

  Main primitive types:
  - string: text
  - number: integers and decimals
  - boolean: true or false
  - undefined: declared but no value assigned
  - null: intentionally empty
  - bigint: very large integers
  - symbol: unique identifier

  typeof tells you the type of a value.
*/

const city = "Tbilisi";
const temperature = 24;
const hasInternet = true;
let selectedUser;
const emptyValue = null;

console.log("typeof city:", typeof city);
console.log("typeof temperature:", typeof temperature);
console.log("typeof hasInternet:", typeof hasInternet);
console.log("typeof selectedUser:", typeof selectedUser);
console.log("typeof emptyValue:", typeof emptyValue); // historical JS behavior: "object"

/*
  TASK 4:
  Create one variable for each type:
  - string
  - number
  - boolean
  - undefined
  - null

  Print each value and its type.
*/

// Write your code here:
console.log("----------------------------------------------------------");
let characterName = "BigBoss99";
console.log(city);

let characterLevel = 99;
console.log(`Your Level Is ${characterLevel}`);

let isAlive = true;
console.log(`Your character is ${isAlive}`);

let myUndefined = undefined;
console.log(myUndefined);

let myNull = null;
console.log(myNull);
console.log("----------------------------------------------------------");

/*
  TASK 5:
  Predict the result before running the code.
  Then uncomment the lines and check.
*/

console.log(typeof "100"); //- სტრინგი
console.log(typeof 100); //- ნამბერი
console.log(typeof true); //- ბულიანი
console.log(typeof undefined); //- ანდეფაინდი
console.log(typeof null); //- ობიექტი
console.log("----------------------------------------------------------");
// ---------------------------------------------------------------------------
// 4. Reference Types
// ---------------------------------------------------------------------------

/*
  Reference types store a reference to a value in memory.

  Common reference types:
  - object
  - array
  - function

  When you copy a primitive, JavaScript copies the value.
  When you copy an object or array, JavaScript copies the reference.
*/

let primitiveA = 10;
let primitiveB = primitiveA;
primitiveB = 99;

console.log("primitiveA:", primitiveA); // 10
console.log("primitiveB:", primitiveB); // 99

const userA = {
  name: "Ana",
  age: 25,
};

const userB = userA;
userB.age = 30;

console.log("userA age:", userA.age); // 30
console.log("userB age:", userB.age); // 30

/*
  TASK 6:
  Create an object called car with:
  - brand
  - model
  - year

  Create another variable called sameCar and assign car to it.
  Change sameCar.year.
  Print both car.year and sameCar.year.

  Question:
  Why did both values change?
*/

// Write your code here:
const car = {
  brand: "Mercedes-Benz",
  model: "W124",
  year: 1992,
};

const sameCar = car;
sameCar.year = 1995;

console.log(`Car Year: ${car.year}`);
console.log(`SameCar Year : ${sameCar.year}`);

console.log("---------------------------------------------");
const un = undefined;
console.log(un);
console.log("ს ა ტ ე ს ტ ო დ");
console.log("------------------------------------");
/*
  TASK 7:
  Create an array called colors with three colors.
  Create another variable called favoriteColors and assign colors to it.
  Push one more color into favoriteColors.
  Print both arrays.

  Question:
  Why do both arrays contain the new color?
*/

// Write your code here:

const colorArray = ["Red", "Blue", "Green"];
const favoriteColors = colorArray;

favoriteColors.push("Black");
favoriteColors.push("Yellow");

console.log(`ColorArray: ${colorArray}`);
console.log(`FavColor: ${favoriteColors}`);
// ---------------------------------------------------------------------------
// 5. Objects
// ---------------------------------------------------------------------------

/*
  Objects store related data as key-value pairs.

  Example:
*/

const person = {
  firstName: "Giorgi",
  lastName: "Beridze",
  age: 28,
  isDeveloper: true,
};

console.log("person first name:", person.firstName);
console.log("person age:", person["age"]);

person.age = 29;
person.country = "Georgia";

console.log("updated person:", person);

/*
  TASK 8:
  Create an object called book with:
  - title
  - author
  - pages
  - isRead

  Then:
  - print the title
  - change isRead to true
  - add a new property called rating
  - print the full object
*/

// Write your code here:
console.log("---------------------------------------------");
const book = {
  title: "Mein Kampf",
  author: "Adolf Hitler",
  pages: 999,
  isRead: false,
};

console.log(`Book Title: ${book.title}`);

book.isRead = true;
book.rating = 3.4;
console.log(book);
console.log("---------------------------------------------");
/*
  TASK 9:
  Create an object called profile.
  It should include:
  - name
  - email
  - address

  address should be another object with:
  - city
  - street
  - buildingNumber

  Print only the city.
*/

// Write your code here:
console.log("---------------------------------------------");
const userProfile = {
  name: "Guka",
  email: "guka.khachidze@gmail.com",
  address: {
    city: "Rustavi",
    street: "17th District",
    buildingNumber: "6",
  },
};

console.log(userProfile.address.city);
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 6. Arrays
// ---------------------------------------------------------------------------

/*
  Arrays store ordered lists.
  Array indexes start at 0.
*/

const fruits = ["apple", "banana", "orange"];

console.log("first fruit:", fruits[0]);
console.log("number of fruits:", fruits.length);

fruits.push("kiwi");
console.log("after push:", fruits);

/*
  TASK 10:
  Create an array called numbers with five numbers.
  Then:
  - print the first number
  - print the last number
  - add a new number
  - print the array length
*/

// Write your code here:
console.log("---------------------------------------------");

const numbersArray = [1, 2, 3, 4, 5];
console.log(`First Number From Array: ${numbersArray[0]}`);
console.log(`Last Number From Array: ${numbersArray[4]}`);

numbersArray.push(6);
console.log(`Array Length Is: ${numbersArray.length}`);

console.log("---------------------------------------------");

/*
  TASK 11:
  Create an array of three user objects.
  Each user should have:
  - name
  - age

  Print the name of the second user.
*/

// Write your code here:

const users = [
  { name: "George Russell", age: 28 },
  { name: "Kimi Antonelli", age: 19 },
  { name: "Lewis Hamilton", age: 41 },
];

console.log(`Second user name: ${users[1].name}`);
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 7. Scope
// ---------------------------------------------------------------------------

/*
  Scope controls where a variable can be used.

  Global scope:
    A variable declared outside blocks and functions.

  Function scope:
    A variable declared inside a function.

  Block scope:
    A variable declared inside { } with let or const.
*/

const globalMessage = "I am global";

function showScopeExample() {
  const functionMessage = "I am inside a function";
  console.log(globalMessage);
  console.log(functionMessage);
}

showScopeExample();

if (true) {
  const blockMessage = "I am inside a block";
  console.log(blockMessage);
}

// This would cause an error because blockMessage exists only inside the if block.
// console.log(blockMessage);

/*
  TASK 12:
  Create a function called greetUser.
  Inside the function:
  - create a variable called message
  - print the message

  Then call the function.

  After that, try to print message outside the function.
  What happens?
*/

// Write your code here:
console.log("---------------------------------------------");

function greetUser(userName) {
  const message = `Hello ${userName}, Welcome to our site.`;
  console.log(message);
}

greetUser("Jemala");
// console.log(message); - ერორი: Message is not defined

console.log("---------------------------------------------");

/*
  TASK 13:
  Create an if block.
  Inside it, declare:
  - one variable with let
  - one variable with const

  Try to print both inside the block.
  Then try to print both outside the block.
  What happens?
*/

// Write your code here:
console.log("---------------------------------------------");
if (true) {
  let letFirstName = "Gela Gnolidze";
  const constFirstName = "Ioseb Stalini";
  console.log(`let: ${letFirstName}, const: ${constFirstName}`);
}
console.log("---------------------------------------------");
//console.log(`let: ${letFirstName}, const: ${constFirstName}`); // ერორი - ორივეზე Let-ზე და const-ზეც

// ---------------------------------------------------------------------------
// 8. var, let, and const Scope Difference
// ---------------------------------------------------------------------------

/*
  var is function-scoped, not block-scoped.
  let and const are block-scoped.
*/

function varScopeExample() {
  if (true) {
    var varValue = "var escapes the block";
    let letValue = "let stays in the block";
    const constValue = "const stays in the block";

    console.log(varValue);
    console.log(letValue);
    console.log(constValue);
  }

  console.log(varValue);
  // console.log(letValue);   // Error
  // console.log(constValue); // Error
}

varScopeExample();
console.log("---------------------------------------------");
/*
  TASK 14:
  Create a function called testVarLetConst.
  Inside the function, create an if block.
  Inside the if block, declare:
  - a var variable
  - a let variable
  - a const variable

  Print all three inside the block.
  Print them outside the block but still inside the function.
  Which ones work?
*/

// Write your code here:
console.log("---------------------------------------------");

function testVarLetConst() {
  if (true) {
    var myVarVariable = "Varex";
    let myLetVariable = "Letex";
    const myConstVariable = "Constex";

    console.log(myVarVariable);
    console.log(myLetVariable);
    console.log(myConstVariable);
  }

  // console.log(myVarVariable); // - მუშაობს
  // console.log(myLetVariable); // - ერორი
  // console.log(myConstVariable); // - ერორი
}
testVarLetConst();

// console.log(myVarVariable); // - ერორი
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 9. Hoisting
// ---------------------------------------------------------------------------

/*
  Hoisting means JavaScript prepares declarations before running code.

  var is hoisted and initialized as undefined.
  let and const are hoisted too, but they cannot be used before declaration.
*/

console.log("hoisted var before declaration:", hoistedVar);
var hoistedVar = "I was declared later";

// These would cause errors:
// console.log(hoistedLet);
// let hoistedLet = "cannot use before declaration";

// console.log(hoistedConst);
// const hoistedConst = "cannot use before declaration";

/*
  TASK 15:
  Predict what each example will do.
  Uncomment one example at a time.
  Run the file after each change.
*/
console.log("---------------------------------------------");
console.log(myVar);
var myVar = 5;

// console.log(myLet);
// let myLet = 5;

// console.log(myConst);
// const myConst = 5;
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 10. Type Conversion
// ---------------------------------------------------------------------------

/*
  JavaScript can convert values from one type to another.

  Explicit conversion:
    You convert it yourself with String(), Number(), Boolean(), etc.

  Implicit conversion:
    JavaScript converts it automatically in some expressions.
*/

const numberAsText = "42";
const convertedNumber = Number(numberAsText);

console.log("converted number:", convertedNumber);
console.log("converted number type:", typeof convertedNumber);

console.log("string plus number:", "5" + 2); // "52"
console.log("string minus number:", "5" - 2); // 3

/*
  TASK 16:
  Convert:
  - "123" to a number
  - 456 to a string
  - 0 to a boolean
  - 1 to a boolean

  Print each value and its type.
*/

// Write your code here:
console.log("---------------------------------------------");

let textNumber = "123";
let strNumber = Number(textNumber);
console.log(strNumber, typeof strNumber);

let myNumber = 456;
let textMyNumber = String(myNumber);
console.log(textMyNumber, typeof textMyNumber);

let zeroNumber = 0;
let boolZero = Boolean(zeroNumber);
console.log(boolZero, typeof boolZero);

let oneNumber = 1;
let boolOne = Boolean(oneNumber);
console.log(boolOne, typeof boolOne);
console.log("---------------------------------------------");
/*
  TASK 17:
  Predict the output before running.
  Then uncomment and check.
*/

console.log("10" + 5);
console.log("10" - 5);
console.log(Number("hello"));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 11. Comparison
// ---------------------------------------------------------------------------

/*
  Use === for strict equality.
  Use !== for strict inequality.

  Avoid == and != when learning modern JavaScript because they perform type
  conversion before comparing.
*/

console.log("5 === 5:", 5 === 5);
console.log('"5" === 5:', "5" === 5);
console.log('"5" == 5:', "5" == 5);

/*
  TASK 18:
  Predict each result.
  Then uncomment and run.
*/
console.log("---------------------------------------------");
console.log(10 === 10); // True
console.log("10" === 10); // False
console.log(true === 1); // False
console.log(null === undefined); // False
console.log(null == undefined); // True
console.log("---------------------------------------------");
// ---------------------------------------------------------------------------
// 12. Object Copying
// ---------------------------------------------------------------------------

/*
  If you want to copy an object without sharing the same reference, create a
  new object.

  For simple objects, you can use spread syntax:
*/

const originalProduct = {
  name: "Keyboard",
  price: 120,
};

const copiedProduct = {
  ...originalProduct,
};

copiedProduct.price = 100;

console.log("original product:", originalProduct);
console.log("copied product:", copiedProduct);

/*
  Important:
  Spread syntax creates a shallow copy.
  Nested objects are still shared unless you copy them too.
*/

const originalOrder = {
  id: 1,
  customer: {
    name: "Mariam",
  },
};

const copiedOrder = {
  ...originalOrder,
};

copiedOrder.customer.name = "Dato";

console.log("original order customer:", originalOrder.customer.name);
console.log("copied order customer:", copiedOrder.customer.name);

/*
  TASK 19:
  Create an object called laptop with:
  - brand
  - memory
  - owner

  Create a shallow copy called copiedLaptop.
  Change copiedLaptop.owner.
  Print both objects.
*/

// Write your code here:
console.log("---------------------------------------------");

const laptop = {
  brand: "Lenovo",
  memory: 16,
  owner: "Guka",
};

const copiedLaptop = {
  ...laptop,
};

copiedLaptop.owner = "George";
console.log(laptop);
console.log(copiedLaptop);

console.log("---------------------------------------------");

/*
  TASK 20:
  Create an object called company with:
  - name
  - address

  address should be an object with:
  - city
  - street

  Create a shallow copy of company.
  Change the copied company's address.city.
  Print both objects.

  Question:
  Why did the original company's city change too?
*/

// Write your code here:
console.log("---------------------------------------------");

const company = {
  name: "LTD",
  address: {
    city: "Rustavi",
    street: "Megovroba Av",
  },
};

const copiedCompany = {
  ...company,
};

copiedCompany.address.city = "Batumi";
console.log(company);
console.log(copiedCompany);

console.log("---------------------------------------------");

// ---------------------------------------------------------------------------
// 13. Final Practice
// ---------------------------------------------------------------------------

/*
  FINAL TASK 1:
  Create a userProfile object with:
  - id
  - firstName
  - lastName
  - age
  - email
  - isActive
  - skills
  - address

  skills should be an array of strings.
  address should be an object with city and country.

  Then:
  - print the full name
  - print the first skill
  - add one more skill
  - change the city
  - print the updated object
*/

// Write your code here:

console.log("---------------------------------------------");

const userProfileObj = {
  id: 1,
  firstName: "Guka",
  lastName: "Khachidze",
  age: 30,
  email: "guka.khachidze@gmail.com",
  isActive: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Rustavi",
    street: "17th District",
  },
};

console.log(`User Fullname: ${userProfileObj.firstName} ${userProfileObj.lastName}`);
console.log(`First Skill: ${userProfileObj.skills[0]}`);

userProfileObj.skills.push("C#");
userProfileObj.skills.push("SQL");
userProfileObj.address.city = "Tbilisi";
userProfileObj["isActive"] = false;
userProfileObj["address"]["city"] = "Batumi";
console.log(userProfileObj);

console.log("---------------------------------------------");

/*
  FINAL TASK 2:
  Create two objects:
  - studentOne
  - studentTwo

  Each student should have:
  - name
  - grades

  grades should be an array of numbers.

  Then:
  - calculate the average grade for each student
  - print which student has the higher average

  Hint:
  You can calculate an average like this:
    const average = (grade1 + grade2 + grade3) / 3;
*/

// Write your code here:
console.log("---------------------------------------------");

const studentOne = {
  name: "George",
  grade: [88, 68, 55, 51],
};

const studentTwo = {
  name: "Kimi",
  grade: [99, 82, 44, 70],
};

const firstStudentGradeAvg =
  (studentOne.grade[0] + studentOne.grade[1] + studentOne.grade[2] + studentOne.grade[3]) /
  studentOne.grade.length;

const secondStudentAvgGrade =
  (studentTwo.grade[0] + studentTwo.grade[1] + studentTwo.grade[2] + studentTwo.grade[3]) /
  studentTwo.grade.length;

console.log(
  `First student avg grade is: ${firstStudentGradeAvg}, Second student avg grade is: ${secondStudentAvgGrade}`
);

if (firstStudentGradeAvg > secondStudentAvgGrade) {
  console.log(`First Student Average Grade Is Higher - ${studentOne.name}`);
} else if (firstStudentGradeAvg < secondStudentAvgGrade) {
  console.log(`Second Student Average Grade Is Higher - ${studentTwo.name}`);
} else {
  console.log(`Both Student Have Equal Grade..`);
}

console.log("---------------------------------------------");

/*
  FINAL TASK 3:
  Create a function called describeValue.
  It should receive one parameter called value.
  Inside the function:
  - print the value
  - print typeof value
  - if the value is null, print "This is null"
  - if the value is an array, print "This is an array"
  - if the value is an object, print "This is an object"

  Test it with:
  - a string
  - a number
  - a boolean
  - null
  - an array
  - an object

  Hint:
  Array.isArray(value) checks if something is an array.
*/

// Write your code here:

function describeValue(value) {
  console.log(value);

  if (value === null) {
    console.log(`VALUE IS NULL`);
  } else if (Array.isArray(value)) {
    console.log(`VALUE TYPE IS ARRAY`);
  } else if (typeof value === "object") {
    console.log(`VALUE IS OBJECT`);
  } else {
    console.log(`VALUE TYPE IS: ${typeof value}`);
  }
}

describeValue({ name: 1, name2: 2 });

console.log("End of practice file");
