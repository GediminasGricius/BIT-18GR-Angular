class Preke{
    constructor (
        protected _pavadinimas:string,
        protected _kaina:number,
        protected _kiekis:number
    ){

    }

    get pavadinimas(){
        return this._pavadinimas;
    }

    get kaina(){
        return this._kaina;
    }
    get kiekis(){
        return this._kiekis;
    }

    public kainaSuPVM(){
        return this._kaina*1.21;

    }
}


class Knyga extends Preke{
    public override kainaSuPVM(){
        return this._kaina*1.09;
    }
}

class Vaistai extends Preke{
    public override kainaSuPVM() {
       return this._kaina*1.05; 
    }
}

let sandelis:Preke[]=[];


sandelis.push( new Preke("Obuoliai", 3, 10) );
sandelis.push( new Knyga("Konstitucija", 10, 5) );
sandelis.push( new Vaistai("Paracitamolis", 10, 5) );

sandelis.forEach((preke:Preke)=>{
    console.log("Prekė: "+preke.pavadinimas+" kainuoja: " + preke.kainaSuPVM());
})

