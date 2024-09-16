
// let inputs = document.querySelectorAll(".code");

// inputs.forEach((input, i) => {
//     input.addEventListener("input", (e) => {
//         let target = e.target
//         if (target.value.match(/\d/)) {
//             if (i < inputs.length - 1) {
//                 inputs[i+1].focus()
//                 target.value = target.value[0]
//             } else if (i == inputs.length - 1) {
//                 target.value = target.value[0]
//             }
//         } else {
//             target.value = ""
//         }
//     });

//     input.addEventListener("keyup", (e) => {
//         if (e.key === "Backspace" && i > 0) {
//             inputs[i-1].focus();
//         }
//     })
// })

let inputs = Array.from(document.querySelectorAll(".code")); // Convert NodeList to Array

inputs.forEach((input, i) => {
    input.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) { // If key is a number
            inputs[i].value = ''; // Clear the current input
            setTimeout(() => inputs[i].value = e.key, 10); // Then set the value

            // If it's not the last input field, focus the next one
            if (i < inputs.length - 1) {
                setTimeout(() => inputs[i + 1].focus(), 10); // Use setTimeout to handle focus
            }
        } else if (e.key === "Backspace") { // If Backspace is pressed
            inputs[i].value = ''; // Clear the current input
            // If it's not the first input field, focus the previous one
            if (i !== 0) {
                setTimeout(() => inputs[i - 1].focus(), 10); // Use setTimeout to handle focus
            }
        } else { // If any other key is pressed, clear the input
            inputs[i].value = '';
        }
    });
});