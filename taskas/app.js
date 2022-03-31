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
let x = 5;
const y = 8;
x = 9;
y = 10;
let p1 = new Point(5, 5);
const p2 = new Point(5, 7);
p1 = new Point(1, 1);
p2.y = 9;
p2.x = 8;
console.log(p1.distance(p2));
p1.distance(p2);
