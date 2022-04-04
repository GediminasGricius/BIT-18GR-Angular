class Point{
    constructor (
        private _x:number,
        private _y:number
    ){

    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(x:number){
        if (x<100)  this._x=x;
    }

    set y(y:number){
        this._y=y;
    }

    public distanceFromOrigin(){
        return Math.sqrt( this.x ** 2 + this.y ** 2 );
    }

    public translate(dx:number, dy:number){
        this._x+=dx;
        this._y+=dy;
    }

    public toString(){
        return "["+this.x+";"+this.y+"]";
    }

    public distance(p:Point){
        return Math.sqrt( (p.x-this.x)**2 + (p.y-this.y)**2 );
    }
}

class Line{
    constructor (
        private _p1:Point,
        private _p2:Point
    ){}

    public toString(){
        return this._p1.toString()+" - "+this._p2.toString();
    }

    public length(){
        return this._p1.distance(p2);
    }
}




let   p1=new Point(5,5);
let   p2=new Point(5,7);

let linija=new Line(p1, p2);
console.log(linija.toString());
console.log(linija.length());

