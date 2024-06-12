// function declaration
// function checkDriverAge() {
//   var age = prompt("What is your age?");

//   if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }

// checkDriverAge();

// function expression
// var checkDriverAge2 = function () {
//     var age = prompt("What is your age?");

//     if (Number(age) < 18) {
//       alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//       alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//       alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge2();

// utilizing an argument

function checkDriverAge(age) {
  if (Number(age) < 18) {
    console.log("Sorry, you are " + age + ", and too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("You are " + age +". Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log("Congratulations on being " + age + ". Enjoy your first year of driving, and enjoy the ride!");
  }
}

checkDriverAge(100);


