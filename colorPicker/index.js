let picker = document.getElementById("colorPicker");
let screen = document.getElementById("colorScreen");
let displayInp = document.getElementById("displayInput");

picker.addEventListener("input",()=>{
    let selectedPicker = picker.value;
    document.body.style.backgroundColor = selectedPicker;
    displayInp.value = selectedPicker;  // ✅ Use .value for input field
    displayInp.value = `You selected: ${selectedPicker}`;
});