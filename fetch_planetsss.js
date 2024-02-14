//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const h1 = document.querySelector("h1");
const planetEle = document.querySelector("#destination");
console.log(planetEle);

const url = "https://handlers.education.launchcode.org/static/planets.json";
async function getDatas() {
  const res = await fetch(url);
  const data = await res.json();

  const card = document.createElement("h5");
  const imgEle = document.createElement("img");
  h1.append(imgEle);
  const nameEle = document.createElement("p");
  h1.append(nameEle);
  nameEle.style.color = "orange";
  const diameterEle = document.createElement('p')
  h1.append(diameterEle)
  const starEle = document.createElement('p')
  h1.append(starEle)
  const moonsEle = document.createElement('p')
  h1.append(moonsEle)
  h1.append(card);
let counter = 0
  planetEle.addEventListener("click", () => {
    imgEle.src = data[counter].image;
    nameEle.textContent = `${data[counter].name}`;
    diameterEle.textContent = `diameter is : ${data[counter].diameter}`
    starEle.textContent=  `star : ${data[counter].star}`
    moonsEle.textContent =` moons : ${data[counter].moons}`
if (counter<= 6) {
    counter++
    
}else{
    counter =0
}
  });
}
getDatas();
