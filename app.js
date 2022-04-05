console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");




let num = 5;

let userNum = prompt("Pick a number between 1 - 25");


if (num > userNum){
    alert("Your number is too low!");
} else if (num < userNum){
    alert("Your number is too high!");
} else {
    alert("You are correct!!");
}


// exercise 2

let userFaveSport = prompt("What is your favorite sport? Basketball, Football or Baseball");

switch (userFaveSport){
    case "Basketball":
        alert ("Excellent choice");
        break;
    case "Football":
        alert ("Love It!");
        break;
    case "Baseball":
        alert ("BOOOORINGG!");
        break;
        default:
            alert("Please begin with a capital letter")

}


