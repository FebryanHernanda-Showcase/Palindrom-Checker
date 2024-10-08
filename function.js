/* FUNCTION WITH FORM METHOD

const myForm = document.getElementById("formku");
let palindromCheck = (e) => {
  // extract data  on Form Input
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const dataValue = formProps.dataInput;
  // end of data extract

END OF FUNCTION WITH FORM METHOD */

// declare get element from html
const inputBox = document.getElementById("text-input");
const submitBtn = document.getElementById("check-btn");

const palindromCheck = (input) => {
  // define & cleaning data input
  const originalWord = input;
  const cleanData = input.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
  let isPalindrome = true;
  // end of cleaning data

  // check empty input box
  if (inputBox.value === "") {
    alert("Please input a value");
    return;
  }
  // end off empty input box

  // function check data
  for (let i = 0; i < cleanData.length / 2; i++) {
    if (cleanData[i] !== cleanData[cleanData.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  // end of function

  // for display result palindrom
  if (isPalindrome) {
    const palindromeTrue = document.querySelector("#result");
    palindromeTrue.innerHTML = `<strong>${originalWord}</strong> is a palindrome`;
    return console.log(`${originalWord} is  a palindrome`);
  } else {
    const palindromeTrue = document.querySelector("#result");
    palindromeTrue.innerHTML = `<strong>${originalWord}</strong> is not a palindrome`;
    return console.log(`${originalWord} is not a palindrome`);
  }
  // end of display result
};

// call function
submitBtn.addEventListener("click", () => {
  palindromCheck(inputBox.value);
  inputBox.value = "";
});

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    palindromCheck(inputBox.value);
  }
});

// end off call function
