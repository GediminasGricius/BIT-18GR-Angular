class Prekes{
    constructor (
        private _pavadinimas:string,
        private _kaina:number,
        private _kiekis:number
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


let sandelis:Prekes[]=[];

sandelis.push(new Prekes("Pienas",1,20));
sandelis.push(new Prekes("Duona",2,10));


let data=JSON.parse(JSON.stringify(sandelis));

//console.log(data);



let sandelis2:Prekes[]=[];

interface dataPreke{
    _pavadinimas: string; 
    _kaina: number; 
    _kiekis: number; 
}

data.forEach((obj:dataPreke) => {
    let prod=new Prekes(obj._pavadinimas, obj._kaina, obj._kiekis);
    sandelis2.push(prod);
});

console.log(sandelis);
console.log(data);
console.log(sandelis2);

console.log(sandelis[0].kainaSuPVM());
//console.log(data[0].kainaSuPVM());
console.log(sandelis2[0].kainaSuPVM());

/*

[{"_pavadinimas":"Pienas","_kaina":1,"_kiekis":20},{"_pavadinimas":"Duona","_kaina":2,"_kiekis":10}]

*/