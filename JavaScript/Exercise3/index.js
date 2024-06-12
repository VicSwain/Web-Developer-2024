var a = prompt("Enter your first number");
var b = prompt("Enter your second number");

function math () {
    var sum = Number(a) + Number(b);
    var difference = Number(a) - Number(b);
    var multiplication = Number(a) * Number(b);
    var division = Number(a) / Number(b);
    alert("The sum is " + sum);
    alert("The difference is " + difference);
    alert("The multiplication is " + multiplication);
    alert("The division is " + division);
}

math();

