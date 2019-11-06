class AccountNumber{
    constructor(){
    }

    encode(name){
        let account_number = [];
        name.toUpperCase().split("").map(letter => {
            account_number.push(letter_number[letter])
        })

        return account_number.join("")
    }

    decode(input_account_number){
        let account_number_array = [];
        let account_name = [];

        // i is 0
        // Input account number.split tells us the length of the input
        // i += 2 as we each letter corresponds to a 2 digit number

        for(let i = 0; i < input_account_number.split("").length; i += 2){
            account_number_array.push(input_account_number.split("")[i] + "" + input_account_number.split("")[i+1])
        }

        account_number_array.map(numberLetter => {
            account_name.push(number_letter[numberLetter])
        })

        return (account_name.join(""))

    }
}