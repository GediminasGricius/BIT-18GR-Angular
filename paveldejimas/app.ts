abstract class Gyvunas{
    
    constructor(
        protected _vardas:string,
        protected _amzius:number
    ){    }

    public printInfo(){
        console.log("Gyvuno vardu: "+this._vardas );
        console.log("Jo amzius yra: "+this._amzius);
        console.log("------------------------------")
    }

    public isveskGyvunoAmziu(){
        console.log("Amzius: "+this._amzius);
    }

    
}

class Suo extends Gyvunas{
    
    constructor(
        vardas:string,
        amzius:number,
        protected _veisle:string
    ){
                
        super(vardas,amzius);
    }

    public override printInfo(): void {
        super.printInfo();
        console.log("Gyvuno tipas: šuo");
        console.log("Veislė: "+this._veisle);
    }

    public loti(){
        console.log("Au Au");
    }
}

interface GarsoSkleidikai{
    decibelai:number;
    garsas: () => void;
   
}

class Katinas extends Gyvunas{
   public override printInfo(): void {
        super.printInfo();
        console.log("Gyvuno tipas: katinas");
    }
}

class Taksas extends Suo implements GarsoSkleidikai{
   
    constructor(
        vardasikas:string,
        amzius:number,
        veisle:string,
        private _ilgis:number,
        public decibelai:number
    ){        
        super(vardasikas,amzius,veisle);
        
    }

    

    public get vardas(){
        return this._vardas;
    }

    public garsas(){
        console.log("Au Au");
    }


}


class DulkiuSiurblys implements GarsoSkleidikai{
    constructor(
        private _gamintojas:string,
        public decibelai:number
    ){

    }

    public garsas():void{
        console.log("buuuuuu");
    }

}


let sugrokDuKartus=(grojikas:GarsoSkleidikai)=>{
   grojikas.garsas();
   grojikas.garsas();
}

let g1=new Suo("Brisius",20, "Kolis");
let g2=new Katinas("Murklys",12);
let g3=new Suo("Rudis",10, "Taksas");

let g4=new Taksas("Ilgis",9, "Taksas", 120, 55);



g4.garsas();



sugrokDuKartus(g4);

g4.isveskGyvunoAmziu();
//g1.printInfo();
//g2.printInfo(); 


let prieglauda:Gyvunas[]=[];


prieglauda.push(g1);
prieglauda.push(g2);
prieglauda.push(g3);


prieglauda.forEach((g)=>{
    g.printInfo();
    console.log("");
   
});
