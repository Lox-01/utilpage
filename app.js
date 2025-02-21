document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            for (const [name, message] of data) {
                console.log(name);
                console.log(message);
            }
        })
        .catch(error => {
            document.getElementById("jsonContent").innerText = "Failed to load data.";
        });
});
