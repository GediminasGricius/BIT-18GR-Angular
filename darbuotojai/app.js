"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get vardas() {
        return this._vardas;
    }
    set vardas(vardas) {
        this._vardas = vardas;
    }
    set pavarde(pavarde) {
        this._pavarde = pavarde;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    gpm() {
        return this._atlyginimas * 0.2;
    }
    psd() {
        return this._atlyginimas * 0.0698;
    }
    vsd() {
        return this._atlyginimas * 0.1252;
    }
}
let darbuotojai = [];
const jonas = new Darbuotojas("Jonas", "Jonaitis", 1200);
const antanas = new Darbuotojas("Antanas", "Antanas", 1300);
darbuotojai.push(jonas);
darbuotojai.push(antanas);
console.log(darbuotojai);
console.log(jonas.gpm());
let gpm = 0;
darbuotojai.forEach((darbuotojas) => {
    console.log(darbuotojas.vardas);
    gpm += darbuotojas.gpm();
});
console.log("Įmonė turės sumokėti: " + gpm);
