const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");
const strong = document.querySelector("#strong")

checkBtn.addEventListener("click",isPalindrome)
function isPalindrome()  {
  if(textInput.value === ""){
    alert("Please input a value");
  }else{
     const cleanedStr =textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    
  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the cleaned string is equal to its reverse
  if(cleanedStr === reversedStr){

    result.textContent = `${ textInput.value} is a palindrome`;
  }else{
    result.textContent = `${ textInput.value} is not a palindrome`;
  }
  }
  textInput.value = "";
}
