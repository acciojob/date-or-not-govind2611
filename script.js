var isDate = function (input) {
  //   write your code here
	
  const date = new Date(input);
  return isValidDate(date);
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);


};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));