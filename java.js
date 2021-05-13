let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);


function menuDropdown(t) {
    if (t.classList.contains("active")) {
        t.classList.remove("active");
    } else {
        t.classList.add("active");
    }
}
// document.getElementById("menu-bar").innerHTML = ``

// function trang1() {
//     document.getElementById("pagination1").style.display = "none";
// }

// function trang2() {
//     document.getElementById("pagination2").style.visibility = "hidden";
// }