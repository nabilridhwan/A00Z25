let input = document.getElementById("input");
let output = document.getElementById("output");
let ac = new AccountNumber()

input.addEventListener("input", () => {

    // User inputted their name to retreive number (encode)
    if(isNaN(input.value)){
        output.value = ac.encode(input.value);

        // Doesnt allow if value is more than 6 letters
        if(input.value.split("").length > 6){
            output.value = "NAME LESS THAN 6 CHAR";
        }
        
    }else{
        output.value = ac.decode(input.value);
    }
})