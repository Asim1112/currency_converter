import inquirer from "inquirer"


const rates: any = {
    USD: 1,     // BAse Currency
    EUR:0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};


let user_Answer = await inquirer.prompt(
    [

        {
    
            name: 'from',
            message:'Select and Enter currency',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']

        },

        
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"


        }
    ]
    )

    let fromAmount = currency[user_Answer.from]
    let toAmount = currency[user_Answer.to]
    let amount = user_Answer.amount
    let baseAmount = amount / fromAmount    //  USD base currency
    let convertedAmount = baseAmount * toAmount
    console.log(convertedAmount);
