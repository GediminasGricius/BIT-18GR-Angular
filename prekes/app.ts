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

const btnPrideti=document.getElementById("prideti");
const inpPavadinimas=<HTMLInputElement>document.getElementById("pavadinimas");
const inpKaina=<HTMLInputElement>document.getElementById("kaina");
const inpKiekis=<HTMLInputElement>document.getElementById("kiekis");
const output=document.getElementById("output");

let sandelis:Prekes[]=[];

let jsonString=localStorage.getItem("prekes");
if (jsonString!=null){
    let data=JSON.parse(jsonString);

    interface dataPreke{
        _pavadinimas: string; 
        _kaina: number; 
        _kiekis: number; 
    }

    data.forEach((obj:dataPreke) => {
        let prod=new Prekes(obj._pavadinimas, obj._kaina, obj._kiekis);
        sandelis.push(prod);
    });
    
}

let outputSandelis=()=>{
    let tmp:string='';
    sandelis.forEach(preke=>{
        tmp+=preke.pavadinimas+" Kaina su PVM: "+preke.kainaSuPVM()+", turimas kiekis: "+preke.kiekis+"<br>";
    });
    if (output!=null){
        output.innerHTML=tmp;
    }
};


if (btnPrideti!=null){
    btnPrideti.onclick=()=>{
        sandelis.push(new Prekes(inpPavadinimas.value,inpKaina.valueAsNumber,inpKiekis.valueAsNumber));
        outputSandelis();
        localStorage.setItem("prekes",JSON.stringify(sandelis));
    };
}

outputSandelis();