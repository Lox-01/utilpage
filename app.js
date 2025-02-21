document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            document.getElementById("jsonContent").innerText = "Failed to load data.";
        });
});
