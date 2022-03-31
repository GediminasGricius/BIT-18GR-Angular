"use strict";
class Prekes {
    constructor(_pavadinimas, _kaina, _kiekis) {
        this._pavadinimas = _pavadinimas;
        this._kaina = _kaina;
        this._kiekis = _kiekis;
    }
    get pavadinimas() {
        return this._pavadinimas;
    }
    get kaina() {
        return this._kaina;
    }
    get kiekis() {
        return this._kiekis;
    }
    kainaSuPVM() {
        return this._kaina * 1.21;
    }
}
const btnPrideti = document.getElementById("prideti");
const btnIstrinti = document.getElementById("istrinti");
const inpPavadinimas = document.getElementById("pavadinimas");
const inpKaina = document.getElementById("kaina");
const inpKiekis = document.getElementById("kiekis");
const output = document.getElementById("output");
const outSuma = document.getElementById("prekiuSuma");
let sandelis = [];
let jsonString = localStorage.getItem("prekes");
if (jsonString != null) {
    let data = JSON.parse(jsonString);
    data.forEach((obj) => {
        let prod = new Prekes(obj._pavadinimas, obj._kaina, obj._kiekis);
        sandelis.push(prod);
    });
}
let outputSandelis = () => {
    if (output != null && outSuma != null) {
        output.innerHTML = "";
        let suma = 0;
        sandelis.forEach((preke, indeksas) => {
            suma += preke.kaina * preke.kiekis;
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = preke.pavadinimas + " Kaina su PVM: " + preke.kainaSuPVM() + " EUR, turimas kiekis: " + preke.kiekis;
            const btn = document.createElement("button");
            btn.textContent = "Ištrinti";
            btn.className = "btn btn-danger float-end";
            btn.onclick = () => {
                deletePreke(indeksas);
                console.log("Ištrynėme: " + preke.pavadinimas + " " + indeksas);
            };
            li.appendChild(btn);
            output.appendChild(li);
        });
        outSuma.textContent = suma + " EUR";
    }
};
let deletePreke = (indeksas) => {
    sandelis.splice(indeksas, 1);
    outputSandelis();
    localStorage.setItem("prekes", JSON.stringify(sandelis));
};
if (btnPrideti != null) {
    btnPrideti.onclick = () => {
        sandelis.push(new Prekes(inpPavadinimas.value, inpKaina.valueAsNumber, inpKiekis.valueAsNumber));
        outputSandelis();
        localStorage.setItem("prekes", JSON.stringify(sandelis));
    };
}
if (btnIstrinti != null) {
    btnIstrinti.onclick = () => {
        localStorage.removeItem("prekes");
        sandelis = [];
        outputSandelis();
    };
}
outputSandelis();
