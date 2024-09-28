//your JS code here. If required.
let inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
    input.addEventListener("input", (e) => {
        let target = e.target
        if (target.value.match(/\d/)) {
            if (i < inputs.length - 1) {
                inputs[i+1].focus()
                target.value = target.value[0]
            } else if (i == inputs.length - 1) {
                target.value = target.value[0]
            }
        } else {
            target.value = ""
        }
    });

    input.addEventListener("keyup", (e) => {
        if (e.key === "Backspace" && i > 0) {
            inputs[i-1].focus();
        }
    })
	inputs[0].focus()
})