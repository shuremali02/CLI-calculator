#! usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter your first number",
        type: "number",
        name: "Firstnumber"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "Secondnumber"
    },
    {
        message: "Select one of the operator",
        name: "operator",
        type: "list",
        choices: ["Division", "Multiplication", "Addition", "Subtraction"],
    }
]);
if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else {
    console.log("Invalid operator");
}
