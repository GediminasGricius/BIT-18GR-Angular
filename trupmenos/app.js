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
const t1 = new Trupmena(1, 1, 8);
const t2 = new Trupmena(2, 3, 4);
//localStorage.setItem("a", "b");
localStorage.setItem('testObject', JSON.stringify(t1));
let d = localStorage.getItem("testObject");
if (d != null) {
    console.log(d);
    console.log("aaa");
    const t3 = JSON.parse(d);
    console.log(t3._daliklis);
    console.log(t3);
}
/*
t1.pridetiTrupmena(t2);
t2.pridetiInt(3);
t2.pridetiTrupmena(t1);


console.log(t1.toString());

//t1.skaitiklis=3;

//t1.prideti(0,1,3);
//console.log(t1.toString());

*/ 
