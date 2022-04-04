"use strict";
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(x) {
        if (x < 100)
            this._x = x;
    }
    set y(y) {
        this._y = y;
    }
    distanceFromOrigin() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    translate(dx, dy) {
        this._x += dx;
        this._y += dy;
    }
    toString() {
        return "[" + this.x + ";" + this.y + "]";
    }
    distance(p) {
        return Math.sqrt((p.x - this.x) ** 2 + (p.y - this.y) ** 2);
    }
}
class Line {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    toString() {
        return this._p1.toString() + " - " + this._p2.toString();
    }
    length() {
        return this._p1.distance(p2);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(5, 7);
let linija = new Line(p1, p2);
console.log(linija.toString());
console.log(linija.length());
