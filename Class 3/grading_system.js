var promptSync = require("prompt-sync")();
var marks = promptSync("Enter your Marks.. ");
if (marks > 90)
    console.log("Congratulations: You got A grade");
else if (marks > 70 && marks <= 90)
    console.log("Congratulations: You got B grade");
else if (marks > 50 && marks <= 70)
    console.log("Congratulations: You got C grade");
else if (marks > 33 && marks <= 50)
    console.log("Work hard: You got D grade");
else if (marks < 90)
    console.log("Sorry: You got F grade");
else
    console.log("invalid marks");
