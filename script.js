document.getElementById("input-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let firstName = document.getElementById("first-name-input").value;

    // Update the variable box content
    document.getElementById("variable-value").textContent = firstName ? firstName : "None";
});
