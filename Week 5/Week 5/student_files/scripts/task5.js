/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

const newDate = new Date;
const weekDay = newDate.getDay();
let displayedMessage;
if (weekDay >= 1 && weekDay <= 5 ){
    displayedMessage = "Hang in there";
}
else{
    displayedMessage = "Woohoo! It is the weekend";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
let anotherMessage;
switch (weekDay){
    case 0:
        anotherMessage = "Sunday";
        break
    case 1:
        anotherMessage = "Monday";
        break
    case 2:
        anotherMessage = "Tuesday";
        break
    case 3:
        anotherMessage = "Wednesday";
        break
    case 4:
        anotherMessage = "Thursday";
        break
    case 5:
        anotherMessage = "Friday";
        break
    case 6:
        anotherMessage = "Saturday";
        break
    default:
        anotherMessage = "Invalid day of week";
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector("#message2").innerHTML = anotherMessage;
document.querySelector("#message1").innerHTML = displayedMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

let templeList = [];

function output(temples){
    temples.forEach((arrayList =>{
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.innerHTML = arrayList.templeName;
        let templeLocation = document.createElement("h4");
        templeLocation.innerHTML = arrayList.location;
        let templeDedicated = document.createElement("h4");
        templeDedicated.innerHTML = arrayList.dedicated;
        let imgTemple = document.createElement("img")
        imgTemple.setAttribute("src",arrayList.imageUrl);
        imgTemple.setAttribute("alt",arrayList.templeName);
        article.appendChild(templeName);
        article.appendChild(templeLocation);
        article.appendChild(templeDedicated);
        article.appendChild(imgTemple);
        document.querySelector("#temples").appendChild(article);
    }))
}
async function getTemples(){
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    if (response.ok){
        templeList = await response.json();
        output(templeList);
    }
}
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset(){
    document.querySelector("#temples").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:

// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

function sortBy(){
    reset();
    let sort = document.querySelector("#sortBy").value;
    if (sort === "templeNameAscending"){
        output(
            templeList.sort((firstTemple,secondTemple) => {
                if (nameTemple1 < nameTemple2){
                    return -1;
                } else if (firstTemple.templeName.toLowerCase() > secondTemple.templeName.toLowerCase()){
                    return 1;
                }
                else {
                    return 0;
                } 
            })
        )
    } else if (sort === "templeNameDescending"){
        output(
            templeList.sort((firstTemple,secondTemple) => {
                if (firstTemple.templeName.toLowerCase() > secondTemple.templeName.toLowerCase()){
                    return -1;
                } else if (firstTemple.templeName.toLowerCase() < secondTemple.templeName.toLowerCase()){
                    return 1;
                }
                else {
                    return 0;   
                } 
            })
        )
    }
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change",sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
