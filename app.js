function nbsp(num) {
    return '&nbsp;'.repeat(num)
}
document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            for (const [name, message] of Object.entries(data)) {
                document.querySelector("div.box").innerHTML += `<div class="repoEntry"><div class="repoName">${name}${nbsp(message[2])}</div><div class="repoMessage">${message[0]}</div></div>`
            }
        })
        .catch(error => {
            document.getElementById("jsonContent").innerText = "Failed to load data.";
        });
});
