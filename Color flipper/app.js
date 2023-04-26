const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //4 values 


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//when u click it change color
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  
 //target body and text color so they change depending on the random num
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
//function to get a random num between 0 and 3 (string has 4 values)
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
