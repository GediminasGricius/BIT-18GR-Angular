class Darbuotojas{
    constructor(
        private _vardas:string,
        private _pavarde:string,
        private _atlyginimas:number
    ){
    }

    public get vardas(){
        return this._vardas;
    }

    public set vardas(vardas:string){
        this._vardas=vardas;
    }

    public set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    public get atlyginimas(){
        return this._atlyginimas;
    }

    public gpm(){
        return this._atlyginimas*0.2;
    }

    public psd(){
        return this._atlyginimas*0.0698;
    }

    public vsd(){
        return this._atlyginimas*0.1252;
    }

}

let darbuotojai:Darbuotojas[]=[];

const jonas:Darbuotojas=new Darbuotojas("Jonas", "Jonaitis", 1200);
const antanas:Darbuotojas=new Darbuotojas("Antanas", "Antanas", 1300);

darbuotojai.push(jonas);
darbuotojai.push(antanas);

console.log(darbuotojai);
console.log(jonas.gpm())

let gpm=0;
darbuotojai.forEach((darbuotojas:Darbuotojas)=>{
    console.log(darbuotojas.vardas);
    gpm+=darbuotojas.gpm();
});
console.log("Įmonė turės sumokėti: "+gpm);