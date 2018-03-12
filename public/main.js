/*const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)
*/

let totalScore1 = 0;
let totalScore2 = 0;
console.log("Team 1 Score " + totalScore1);
console.log("Team 2 Score " + totalScore2);


const t1Add1 = () => {
  totalScore1++;
  console.log("Team 1 Score " + totalScore1);
  const teamScore1 = document.querySelector(".teamScore1");
  teamScore1.textContent = totalScore1;
}

const t2Add1 = () => {
  totalScore2++;
  console.log("Team 2 Score " + totalScore2);
  const teamScore2 = document.querySelector(".teamScore2");
  teamScore2.textContent = totalScore2;
}

const t1Sub1 = () => {
  totalScore1--;
  console.log("Team 1 Score " + totalScore1);
  const teamScore1 = document.querySelector(".teamScore1");
  teamScore1.textContent = totalScore1;
}

const t2Sub1 = () => {
  totalScore2--;
  console.log("Team 1 Score " + totalScore2);
  const teamScore2 = document.querySelector(".teamScore2");
  teamScore2.textContent = totalScore2;
}