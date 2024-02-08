// /* LESSON 3 - Programming Tasks */
  
function add (number1, number2) 
{
  return number1 + number2;
}

function addNumbers()
{
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add (addNumber1, addNumber2);
}
// This line of code is not located inside a function because it needs to be 
// executed when the script is loaded or when the Document Object Module (DOM) content is ready. 
// Placing it outside of a function ensures that it is executed immediately when 
// the script is parsed, allowing the event listener to be set up properly.
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function Subtract (number1, number2) 
{
  return number1 - number2;
}

function subtractNumbers()
{
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = Subtract (subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow function for multiplication
const multiply = (number1, number2) => number1 * number2;

// Arrow function for multiplyNumbers
const multiplyNumbers = () => {
  // Getting values from HTML form controls
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  
  // Calling the multiply function and assigning the return value to an HTML form element
  document.querySelector('#product').value = multiply(factor1, factor2);
};

// Adding click event listener to the HTML button to call the multiplyNumbers function
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

function divide (number1, number2) 
{
  return number1 / number2;
}

function divideNumbers()
{
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide (dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Function to calculate total due
function calculateTotal() {
  // Getting the numeric value entered by the user in the subtotal field
  let subtotal = parseFloat(document.getElementById('subtotal').value);

  // Checking if the membership checkbox has been checked
  let isMember = document.getElementById('member').checked;

  // Applying discount if the user is a member
  let discount = isMember ? 0.2 : 0; // 20% discount if the user is a member

  // Calculating total due
  let total = subtotal - (subtotal * discount);

  // Updating the total span with the formatted total
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Adding click event listener to the Get Total Due button
document.getElementById('getTotal').addEventListener('click', calculateTotal);


// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById('array').textContent = numbersArray.join(', ');

// Use the filter() array method to find all of the odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 !== 0).join(', ');

// Use the filter() array method to find all of the even numbers of the array variable
// and assign the result to the HTML element with an ID of evens
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');

// Use the reduce() array method to sum the array variable elements
// and assign the result to the HTML element with an ID of sumOfArray
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() array method to multiply each element in the array variable by 2
// and assign the result to the HTML element with an ID of multiplied
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2).join(', ');

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two
// and assign the result to the HTML element with an ID of sumOfMultiplied
document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
