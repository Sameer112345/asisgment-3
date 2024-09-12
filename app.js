var city = prompt("where you lived?");
if (city ==="karachi"){
    alert("Welcome to city of lights");
}
    else{
        alert("Wellcome!!! ");
    }
    //  aswer 2 

var gender =  prompt("where is your gender?");
if( gender === "male" ){
    alert("Good morning sir");
}
else if( gender === "female"){alert("Good morning mam");}
else{alert("Good Morning")}
answer 3

var SignalColour  = prompt("Enter the color of the road traffic signal (red/yellow/green)");
if(SignalColour === "red"){alert("Must Stop");}
else if(SignalColour === "yellow"){alert("ready to move");}
else if( SignalColour === "green"){alert("move now");}
else{alert("Invalid color! Please enter red, yellow, or green.");}

ANSWER 4

var fuel = (prompt("Enter the remaining fuel in your car (in litres):"));

// Check if the fuel is less than 0.25 liters
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Fuel level is sufficient");
}
 

ANSWER 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

function calculatePercentage() {
    Get the values entered by the user
    var percentage = +prompt("please enter your percentage")

    if (percentage >= 80) {alert
       (grade = "grade = A") ;
    } else if (percentage >= 70) {alert("grade = b")
       ;
    } else if (percentage >= 60) {alert("grade = C")
        ;
    } else if (percentage >= 50) {alert("grade = C")
       ;
    } else {alert("grade = Fail")}
        
    answer 7
    function calculatePercentage() {
        // Get the values entered by the user
        var subject1 = parseFloat(document.getElementById("subject1").value);
        var subject2 = parseFloat(document.getElementById("subject2").value);
        var subject3 = parseFloat(document.getElementById("subject3").value);
        var totalMarks = parseFloat(document.getElementById("totalMarks").value);
    
        // Calculate the total obtained marks and percentage
        var obtainedMarks = subject1 + subject2 + subject3;
        var percentage = (obtainedMarks / totalMarks) * 100;
    
        // Determine the grade and remarks based on the percentage
        var grade;
        var remarks;
        if (percentage >= 80) {
            grade = "A";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "B";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "C";
            remarks = "Fair";
        } else if (percentage >= 50) {
            grade = "D";
            remarks = "Satisfactory";
        } else {
            grade = "Fail";
            remarks = "Needs Improvement";
        }
    
        // Display the results on the webpage
        document.getElementById("result").innerHTML = `
            <h3>Result</h3>
            <p><strong>Total Marks:</strong> ${totalMarks}</p>
            <p><strong>Marks Obtained:</strong> ${obtainedMarks}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Remarks:</strong> ${remarks}</p>
        `;
    }
    
    


 answer 8
Store the secret number (random number between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again! The secret number was " + secretNumber);
}

// b part
 // Store the secret number (random number between 1 and 10)
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the guess is correct or close
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again! The secret number was " + secretNumber);
}


answer 8 
Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (userNumber % 3 === 0) {
    alert("The number " + userNumber + " is divisible by 3.");
} else {
    alert("The number " + userNumber + " is not divisible by 3.");
}

answer 9
Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number to check if it is even or odd:"));

// Check if the number is even or odd
if (userNumber % 2 === 0) {
    alert("The number " + userNumber + " is even.");
} else {
    alert("The number " + userNumber + " is odd.");
}
Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Enter the current temperature:"));

// Display the appropriate message based on the temperature
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's very cold outside.");
}

// Prompt the user to enter the first number
var num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var num2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
var operation = prompt("Enter the operation you want to perform (+, -, *, /, %):");

// Initialize a variable to store the result
var result;

// Perform the operation based on the user input
if (operation === "+") {
    result = num1 + num2;
    alert("The result of " + num1 + " + " + num2 + " is: " + result);
} else if (operation === "-") {
    result = num1 - num2;
    alert("The result of " + num1 + " - " + num2 + " is: " + result);
} else if (operation === "*") {
    result = num1 * num2;
    alert("The result of " + num1 + " * " + num2 + " is: " + result);
} else if (operation === "/") {
    // Check if the second number is not zero to avoid division by zero
    if (num2 !== 0) {
        result = num1 / num2;
        alert("The result of " + num1 + " / " + num2 + " is: " + result);
    } else {
        alert("Division by zero is not allowed.");
    }
} else if (operation === "%") {
    result = num1 % num2;
    alert("The result of " + num1 + " % " + num2 + " is: " + result);
} else {
    alert("Invalid operation! Please enter one of these: +, -, *, /, %");
}



