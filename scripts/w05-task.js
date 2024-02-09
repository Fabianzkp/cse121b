//For the stretch, I added additional options such as sorting the temples alphabetically.

// Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.getElementById("temples");

// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create HTML <article> element
        const article = document.createElement('article');

        // Create HTML <h3> element for temple name
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create HTML <img> element for temple image
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append <h3> and <img> to <article> element
        article.appendChild(h3);
        article.appendChild(img);

        // Append <article> to global templesElement variable
        templesElement.appendChild(article);
    });
};

const getTemples = async () => {
    // Fetch temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    // Convert response to JavaScript object and assign it to templeList
    templeList = await response.json();

    // Call displayTemples function and pass the list of temples (templeList)
    displayTemples(templeList);
};

// Test the code by calling the getTemples function
getTemples();

// Function expression named reset that clears all <article> elements from templesElement
const reset = () => {
    templesElement.innerHTML = "";
};

// Function expression named filterTemples
const sortBy = (temples) => {
    // Call reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered
    const filter = document.getElementById("filtered").value;

    // Use a switch statement to filter temples based on the selected value
    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

document.querySelector("#filtered").addEventListener("change", () => {
    sortBy(templeList);
});



