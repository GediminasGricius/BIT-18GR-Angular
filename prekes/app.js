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
const inpPavadinimas = document.getElementById("pavadinimas");
const inpKaina = document.getElementById("kaina");
const inpKiekis = document.getElementById("kiekis");
const output = document.getElementById("output");
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
    let tmp = '';
    sandelis.forEach(preke => {
        tmp += preke.pavadinimas + " Kaina su PVM: " + preke.kainaSuPVM() + ", turimas kiekis: " + preke.kiekis + "<br>";
    });
    if (output != null) {
        output.innerHTML = tmp;
    }
};
if (btnPrideti != null) {
    btnPrideti.onclick = () => {
        sandelis.push(new Prekes(inpPavadinimas.value, inpKaina.valueAsNumber, inpKiekis.valueAsNumber));
        outputSandelis();
        localStorage.setItem("prekes", JSON.stringify(sandelis));
    };
}
outputSandelis();
