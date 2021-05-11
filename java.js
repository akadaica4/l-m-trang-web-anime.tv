let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);


function trang1() {
    document.getElementById("pagination1").style.display = "none";
}

function trang2() {
    document.getElementById("pagination2").style.visibility = "hidden";
}