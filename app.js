document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById("jsonContent");
            contentDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("jsonContent").innerText = "Failed to load data.";
        });
});
