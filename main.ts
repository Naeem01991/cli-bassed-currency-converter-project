#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = 
        {
            USD: 1, // base currency
            EUR: 0.91,
            GBP: 0.76,
            INR: 74.57,
            PKR: 278
        };

let user_answer = await inquirer.prompt
(
    [

        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {   
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {   
            name: "amount",
            message: "Enter from Amount",
            type: "number",
        }
    ]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmonut = amount / fromAmount // USD base currency
let convertedAmount = baseAmonut * toAmount
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);