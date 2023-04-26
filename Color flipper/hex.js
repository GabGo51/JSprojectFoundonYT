const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");


//function to click and change color
btn.addEventListener("click", function () {
  //we want it to start by # and then add 6 value so we give it # from the start and reasigne it later
  let hexColor = "#";

  //loop 6 time to get the 6 value needed for the string representing the hex value
  for (let i = 0; i < 6; i++) {
    //using += so you add those value together
    hexColor += hex[getRandomNumber()];
  }
  
  //targeting body and text color so that they change
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});


//getting that random number using arr.length
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
