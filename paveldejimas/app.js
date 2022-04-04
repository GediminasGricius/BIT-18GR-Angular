"use strict";
class Gyvunas {
    constructor(_vardas, _amzius) {
        this._vardas = _vardas;
        this._amzius = _amzius;
    }
    printInfo() {
        console.log("Gyvuno vardu: " + this._vardas);
        console.log("Jo amzius yra: " + this._amzius);
        console.log("------------------------------");
    }
}
class Suo extends Gyvunas {
    constructor(_vardas, _amzius, _veisle) {
        super(_vardas, _amzius);
        this._veisle = _veisle;
    }
    printInfo() {
        super.printInfo();
        console.log("Gyvuno tipas: šuo");
        console.log("Veislė: " + this._veisle);
    }
    loti() {
        console.log("Au Au");
    }
}
class Katinas extends Gyvunas {
    printInfo() {
        super.printInfo();
        console.log("Gyvuno tipas: katinas");
    }
}
let g1 = new Suo("Brisius", 20, "Kolis");
let g2 = new Katinas("Murklys", 12);
let g3 = new Suo("Rudis", 10, "Taksas");
//g1.printInfo();
//g2.printInfo(); 
let prieglauda = [];
prieglauda.push(g1);
prieglauda.push(g2);
prieglauda.push(g3);
prieglauda.forEach((g) => {
    g.printInfo();
    console.log("");
});
