const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImg = document.createElement("img");
newImg.setAttribute("src", "https://placeimg.com/200/200/animals");
newImg.setAttribute("alt","Animals Image");
document.body.appendChild(newImg);
/* Create New Section */

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Language</p>";
document.body.appendChild(newSection);