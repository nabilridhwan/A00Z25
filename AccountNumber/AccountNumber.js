const AONEZTWOSIX ={
    "A": "01",
    "B": "02",
    "C": "03",
    "D": "04",
    "E": "05",
    "F": "06",
    "G": "07",
    "H": "08",
    "I": "09",
    "J": "10",
    "K": "11",
    "L": "12",
    "M": "13",
    "N": "14",
    "O": "15",
    "P": "16",
    "Q": "17",
    "R": "18",
    "S": "19",
    "T": "20",
    "U": "21",
    "V": "22",
    "W": "23",
    "X": "24",
    "Y": "25",
    "Z": "26"
}

const ONEATWOSIXZ = {
    "01": "A",
    "02": "B",
    "03": "C",
    "04": "D",
    "05": "E",
    "06": "F",
    "07": "G",
    "08": "H",
    "09": "I",
    "10": "J",
    "11": "K",
    "12": "L",
    "13": "M",
    "14": "N",
    "15": "O",
    "16": "P",
    "17": "Q",
    "18": "R",
    "19": "S",
    "20": "T",
    "21": "U",
    "22": "V",
    "23": "W",
    "24": "X",
    "25": "Y",
    "26": "Z"
}

class AccountNumber{
    constructor(){
    }

    encode(name){
        let account_number = [];
        name.toUpperCase().split("").map(letter => {
            account_number.push(AONEZTWOSIX[letter])
        })

        return account_number.join("")
    }

    decode(input_account_number){
        let number_of_letters = (input_account_number.split("").length) / 2;
        let account_number_array = [];
        let account_name = [];

        // i is 0
        // Input account number.split tells us the length of the input
        // i += 2 as we each letter corresponds to a 2 digit number

        for(let i = 0; i < input_account_number.split("").length; i += 2){
            account_number_array.push(input_account_number.split("")[i] + "" + input_account_number.split("")[i+1])
        }

        account_number_array.map(numberLetter => {
            account_name.push(ONEATWOSIXZ[numberLetter])
        })

        return (account_name.join(""))

    }
}