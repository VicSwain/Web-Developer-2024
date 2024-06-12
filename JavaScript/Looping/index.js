var todos = [
    "clean room",
    "brush teeth",
    "study JavaScript",
    "eat healthy",
]
var todosLength = todos.length;
// for loop
// for (let index = 0; index < todos.length; index++) {
//     todos[index] = todos[index] + "!";
// }
// console.log(todos);

// while loop checks the condition then runs
// var counterOne = 10;
// while (counterOne > 0 ) {
//     console.log(counterOne);
//     counterOne--;
// }

// do/while loop performs the actions then checks the condition
// var counterTwo = 10

// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);


// forEach loop
// i is the index of the array being passed as parameter 
todos.forEach(function(todo, i ) {
    console.log(todo, i);
});