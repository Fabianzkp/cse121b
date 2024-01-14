/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Anana Agwu Ezikpe";
let currentYear = "2024";
let profilePicture = "images/fabianimage.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);




/* Step 5 - Array */
const favoriteFood = ["Rice", "Plantain", "Vegetables", "Yam", "Afang"];
const singleFood = favoriteFood.push("Beans");
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
favoriteFood.pop();
foodElement.innerHTML += `<br><strong>Modified Favorite Foods:</strong> ${favoriteFood.join('<br>')}`;




