let answer = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    // 5. Clear the input box (Researched: setting value to empty string)
    let inputField = document.getElementById("userGuess");
    let guess = Number(inputField.value);
    inputField.value = ""; 

    // 3. Initial test alert (Optional: comment out for final game)
    // alert("The answer is: " + answer);

    // 4. Comparison logic
    if (guess < answer) {
        alert("higher");
    } else if (guess > answer) {
        alert("lower");
    } else if (guess === answer) {
        alert("Success");
    }
}
    document.getElementById("userGuess").value = "";
