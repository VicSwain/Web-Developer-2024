var array = ["Banana", "Apples", "Oranges", "Blueberries"];


array.shift();
console.log(array);
array.push('Kiwi');
console.log(array);
array.shift();
console.log(array);
array.reverse();
console.log(array);



var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1]);