#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let myPin = 8084;
async function main() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your Pin",
            type: "number"
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("Your Pin is Correct");
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an Option",
                type: "list",
                choices: ["Withdraw", "Check balance", "Fast cash"]
            }
        ]);
        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw",
                    type: "number"
                }
            ]);
            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log(`You have withdrawn $${amountAns.amount}. Your remaining balance is: $${myBalance}`);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else if (operationAns.operation === "Check balance") {
            console.log(`Your balance is: $${myBalance}`);
        }
        else if (operationAns.operation === "Fast cash") {
            let fastCashAmount = 1000; // Set fast cash amount
            if (fastCashAmount <= myBalance) {
                myBalance -= fastCashAmount;
                console.log(`You have withdrawn $${fastCashAmount}. Your remaining balance is: $${myBalance}`);
            }
            else {
                console.log("Insufficient balance for fast cash.");
            }
        }
    }
    else {
        console.log("Incorrect pin");
    }
}
main();
