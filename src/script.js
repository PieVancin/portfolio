let toggle = document.getElementById("w-open")
let popup = document.getElementById("window")
let close = document.getElementById("w-close")

toggle.onclick = function() {
    popup.style.display="block";

}

close.onclick = function() {
    popup.style.display="none";
}
