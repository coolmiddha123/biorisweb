includeHTML();

function includeHTML() {
    const myTimeout = setTimeout(highlightSelection, 100);
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }

}
function hideButton() {
    document.getElementById("nav-content").classList.toggle("hidden");
}

function showMenu() {
    document.querySelector(".mobile-menu").classList.toggle("hidden");
    this.highlightSelection();
}
function highlightSelection() {
    let path = document.location.pathname;
    console.log(path);
    let elements = [];
    if (path.includes('index.html')) {
        elements = document.querySelectorAll(".index")
    } else if (path.includes('about.html')) {
        elements = document.querySelectorAll(".about");
    } else if (path.includes('ourproducts.html')) {
        elements = document.querySelectorAll(".ourproducts");
    } else {
        elements = document.querySelectorAll(".contactus");
    }
    if (elements.length > 0) elements.forEach(element => {
        element.classList.add('text-green-500');
    });
}
