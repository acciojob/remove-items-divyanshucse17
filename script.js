// Get references to the select element and button
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Add click event listener to the button
button.addEventListener("click", () => {
    // Get the index of the selected option
    const selectedIndex = select.selectedIndex;

    // If an option is selected, remove it
    if (selectedIndex >= 0) {
        select.remove(selectedIndex);
    }
});
