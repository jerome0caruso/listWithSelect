const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let firstChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) { //make sure shift key was down and they checked it / not un
        checkboxes.forEach(checkbox => { //looping through every checkbox and this becomes last box checked
            if (checkbox === this || checkbox === firstChecked) { //is the first checked or last checked depending on which way 
                inBetween = !inBetween; //sets to opposite// turns on the var
            }
            if (inBetween) { //checking the boxs in between
                checkbox.checked = true;
            }
        })
    }
    console.log(this)
    firstChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck))



