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

const newName1 = () => {
  let name1Field = document.querySelector("#name1Field").value;
  console.log(name1Field)
  const jsname1Field = document.querySelector(".team1Name");
  console.log(jsname1Field)
  jsname1Field.textContent = name1Field;
}

const newName2 = () => {
  let name2Field = document.querySelector("#name2Field").value;
  console.log(name2Field)
  const jsname2Field = document.querySelector(".team2Name");
  console.log(jsname2Field)
  jsname2Field.textContent = name2Field;
}