const linkPage = document.getElementById("links")
var links = false

function pages() {
    if (links == false) {
        linkPage.style.display = "block";
        links = true
    } else if (links == true) {
        linkPage.style.display = "none";
        links = false
    }
}