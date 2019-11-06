let input = document.getElementById("input");
let output = document.getElementById("output");
let ac = new AccountNumber()

input.addEventListener("input", () => {

    // User inputted their name to retreive number (encode)
    if(isNaN(input.value)){
        output.value = ac.encrypt(input.value);
        
    }else{
        output.value = ac.decrypt(input.value);
    }
})