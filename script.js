// Create a programm that calculate age after a user makes an input and submit through the click of a button.


const userInputField = document.getElementById('birthday');
const btn = document.getElementById('btn');
const result = document.getElementById('result')

let userDOB, age = null

const getUserDOB = (e) => {
  userDOB = e.target.value;
}

userInputField.addEventListener('change', getUserDOB);

const todaysDate = new Date();
const thisYear = todaysDate.getFullYear();

let userYear;
const calculateAge = () => {

  userYear = userDOB.split("-")[0];
  age = thisYear - userYear
  if (userYear > thisYear) {
    age = null;
  }

  if (age < 0 || age === null) {
    age = 0;
  }
}

btn.addEventListener('click', () => {
  calculateAge();
  displayAge();
});

const displayAge = () => {
  if (age === null) {
    return result.textContent = `kindly Select a Valid Age`;
  }
  return result.textContent = `Your age is ${age} years old`;
}