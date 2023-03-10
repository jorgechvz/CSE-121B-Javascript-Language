/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
// Step 3: declare and instantiate a variable to hold the current year
// Step 4: place the value of the current year variable into the HTML file
// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

/* Variables */
const nameProfile = "Jorge Chavez";

const actualYear = new Date;
document.querySelector('#year').textContent = actualYear.getFullYear();

const urlImage = "images/profile_image.png";

/* DOM */
/* Add the name, year and image in HTML */
document.querySelector('#name').textContent = nameProfile;

document.querySelector('img')
        .setAttribute('src', urlImage);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2

const favoriteFoods = [`Rice with Chicken`,`Lomo Saltado`,`Meat Grill`,`Rocoto Stuffed with Potato Cake`,`Ceviche`,`Baked pork`];
const anotherFood = "Chicken Grill";
/* Add Chicken Grill in array */
favoriteFoods.push(anotherFood);
/* Remove the first element in the array */
favoriteFoods.shift();
/* Remove the last element in the array */
favoriteFoods.pop();

/* DOM */
/* Add the array in HTML */
document.querySelector('#food').textContent = favoriteFoods;