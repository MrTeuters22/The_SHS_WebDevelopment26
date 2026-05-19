// Function for the "add" button
function addNumbers() {
    let num1 = parseFloat(document.getElementById('add1').value);
    let num2 = parseFloat(document.getElementById('add2').value);
    alert("Result: " + (num1 + num2));
}

// Function for the "multiply" button
function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById('mult1').value);
    let num2 = parseFloat(document.getElementById('mult2').value);
    alert("Result: " + (num1 * num2));
}

// Function for the "Find C" button
function findC() {
    let a = parseFloat(document.getElementById('sideA').value);
    let b = parseFloat(document.getElementById('sideB').value);
    
    // Pythagorean Theorem: c = sqrt(a^2 + b^2)
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    alert("The value of c is: " + c);
}
