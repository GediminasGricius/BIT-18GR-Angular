class Zmogus {
    constructor(_vardas, _amzius, _email) {
        this._vardas = _vardas;
        this._amzius = _amzius;
        this._email = _email;
    }
    isvedimas() {
        console.log("Aš esu: " + this._vardas + " mano amzius: " + this._amzius);
    }
    get amzius() {
        return this._amzius;
    }
    set amzius(amzius) {
        if (amzius < 18)
            throw new Error("Amzius per mazas");
        this._amzius = amzius;
    }
}
const jonas = new Zmogus("Jonas", 32, "jonas@gmail.com");
const petras = new Zmogus("Petras", 22);
//petras.setAmzius(19);
petras.amzius = 10;
console.log(petras.amzius);
jonas.isvedimas();
petras.isvedimas();
