"use strict";
const output = document.getElementById("atsakymas");
const btSkaiciuoti = document.getElementById("skaiciuoti");
let inX = document.getElementById("var_x");
let inY = document.getElementById("var_y");
const distance = (p) => {
    return Math.sqrt(p.x * p.x + p.y * p.y);
};
let taskas = {
    x: 5,
    y: 5
};
const fSuskaiciuoti = () => {
    if (output != null) {
        output.innerHTML = "Atsakymas: " + distance(taskas);
    }
};
if (btSkaiciuoti != null) {
    taskas.x = +inX.value;
    taskas.y = +inY.value;
    btSkaiciuoti.onclick = fSuskaiciuoti;
}
