"use strict";
class Trupmena {
    constructor(_sveikojiDalis, _skaitiklis, _daliklis) {
        this._sveikojiDalis = _sveikojiDalis;
        this._skaitiklis = _skaitiklis;
        this._daliklis = _daliklis;
        this.prastinimas();
    }
    get sveikojiDalis() {
        return this._sveikojiDalis;
    }
    get skaitiklis() {
        return this._skaitiklis;
    }
    get daliklis() {
        return this._daliklis;
    }
    set sveikojiDalis(sveikojiDalis) {
        this._sveikojiDalis = sveikojiDalis;
    }
    set skaitiklis(skaitiklis) {
        this._skaitiklis = skaitiklis;
        this.prastinimas();
    }
    set daliklis(daliklis) {
        this._daliklis = daliklis;
        this.prastinimas();
    }
    toString() {
        return this._sveikojiDalis + " " + this._skaitiklis + "/" + this._daliklis;
    }
    pridetiInt(sk) {
        this._sveikojiDalis += sk;
    }
    prideti(sv, skaitiklis, daliklis) {
        this.pridetiInt(sv);
        this._skaitiklis = this._skaitiklis * daliklis + skaitiklis * this._daliklis;
        this._daliklis = this._daliklis * daliklis;
        this.prastinimas();
    }
    pridetiTrupmena(t) {
        this.prideti(t.sveikojiDalis, t.skaitiklis, t.daliklis);
    }
    toNumber() {
        return this._sveikojiDalis + this._skaitiklis / this._daliklis;
    }
    prastinimas() {
        let bdd = this.bdd(this._skaitiklis, this._daliklis);
        this._skaitiklis = this._skaitiklis / bdd;
        this._daliklis = this._daliklis / bdd;
        if (this._skaitiklis > this._daliklis) {
            let sv = Math.floor(this._skaitiklis / this._daliklis);
            this._skaitiklis %= this._daliklis;
            this._sveikojiDalis += sv;
        }
    }
    bdd(x, y) {
        for (let i = Math.min(x, y); i > 0; i--)
            if (x % i == 0 && y % i == 0)
                return i;
        return 1;
    }
}
class Lygtis {
    constructor(_trupmena1, _veiksmas, _trupmena2) {
        this._trupmena1 = _trupmena1;
        this._veiksmas = _veiksmas;
        this._trupmena2 = _trupmena2;
    }
    toString() {
        return this._trupmena1.toString() + this._veiksmas + this._trupmena2.toString();
    }
    apskaiciuoti() {
        if (this._veiksmas == "+") {
            return this._trupmena1.toNumber() + this._trupmena2.toNumber();
        }
        if (this._veiksmas == "-") {
            return this._trupmena1.toNumber() - this._trupmena2.toNumber();
        }
        if (this._veiksmas == "*") {
            return this._trupmena1.toNumber() * this._trupmena2.toNumber();
        }
    }
}
const t1 = new Trupmena(0, 1, 2);
const t2 = new Trupmena(0, 1, 5);
const lygtis = new Lygtis(t1, "*", t2);
console.log(lygtis.toString());
console.log(lygtis.apskaiciuoti());
