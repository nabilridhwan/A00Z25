let input = document.getElementById("input");
let output = document.getElementById("output");
let eInput = document.getElementById("eInput");
let eOutput = document.getElementById("eOutput");
let ac = new AccountNumber()

input.addEventListener("input", () => {
    output.value = ac.decrypt(input.value);
})

// 1401020912

eInput.addEventListener("input", () => {
    eOutput.value = ac.encrypt(eInput.value);
})