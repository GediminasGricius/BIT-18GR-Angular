class Zmogus{
    
    constructor(
        private _vardas:string, 
        private _amzius:number, 
        private _email?:string){
      
    }
    
    public isvedimas(){
        console.log("Aš esu: "+this._vardas+" mano amzius: "+this._amzius);
    }

    get amzius(){
        return this._amzius;
    }


    set amzius(amzius:number){
        if (amzius<18) throw new Error("Amzius per mazas");
        this._amzius=amzius;
    }

   

}




const jonas=new Zmogus("Jonas", 32, "jonas@gmail.com");
const petras=new Zmogus("Petras", 22);

//petras.setAmzius(19);
petras.amzius=10;


console.log(petras.amzius);

jonas.isvedimas();
petras.isvedimas();
