// alert(document.getElementById("person-count").value);
let count = 0;
let perscount = document.getElementById("person-count");
let prevcount = document.getElementById("pass-prev");

function increment() {
    count += 1;
    perscount.textContent = count;

}

function Save() {
    prevcount.textContent += count + " - ";
    count = 0;
    perscount.textContent = count;
}