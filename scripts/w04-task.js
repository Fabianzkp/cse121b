
let myProfile = {
    name: "Anana Agwu Ezikpe",
    photo: "images/fabianimage.jpg",
    favoriteFoods: [
      'Rice',
      'Tikka Masala',
      'Prioshki',
      'Shrimp',
      'Banana Cream Pie'
    ],
    hobbies: [
      'Reading',
      'Traveling',
      'Cooking',
      'Hiking'
    ],
    placesLived: []
  };

  myProfile.placesLived.push(
    {
      place: 'Abuja, Nigeria',
      length: '1 year'
    }
  );

  myProfile.placesLived.push(
    {
      place: 'Calabar, Nigeria',
      length: '25 years'
    }
  );
  
  myProfile.placesLived.push(
    {
      place: 'Lagos, Nigeria',
      length: '2 years'
    }
  );
  
  // Assigning the value of the name property to the HTML element with an ID of 'name'
document.querySelector('#name').textContent = myProfile.name;

// Assigning the value of the photo property as the src attribute of the HTML <img> with an ID of 'photo'
document.querySelector('#photo').src = myProfile.photo;

// Assigning the value of the name property as the alt attribute of the HTML <img> with an ID of 'photo'
document.querySelector('#photo').alt = myProfile.name;

// Creating list items for each favorite food and appending them to the HTML <ul> element with an ID of 'favorite-foods'
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

// Creating list items for each hobby and appending them to the HTML <ul> element with an ID of 'hobbies'
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

// Iterating over each object in the placesLived property and appending them to the HTML <dl> element with an ID of 'places-lived'
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

  