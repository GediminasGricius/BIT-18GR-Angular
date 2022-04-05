"use strict";
class Preke {
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
class Knyga extends Preke {
    kainaSuPVM() {
        return this._kaina * 1.09;
    }
}
class Vaistai extends Preke {
    kainaSuPVM() {
        return this._kaina * 1.05;
    }
}
let sandelis = [];
sandelis.push(new Preke("Obuoliai", 3, 10));
sandelis.push(new Knyga("Konstitucija", 10, 5));
sandelis.push(new Vaistai("Paracitamolis", 10, 5));
sandelis.forEach((preke) => {
    console.log("Prekė: " + preke.pavadinimas + " kainuoja: " + preke.kainaSuPVM());
});
