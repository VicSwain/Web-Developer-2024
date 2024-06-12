var userAge = prompt("Please enter your age");
// the Number value is needed to ensure the strict quality triggers 
// JS would be compaing a string value entered by the user to a number in the code
userAge = Number(userAge);

if (userAge < 18 ) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (userAge > 18) {
    alert("Powering On. Enjoy the ride!");
} else if (userAge === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}

