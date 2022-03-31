class Trupmena{
    constructor (
        private _sveikojiDalis:number,
        private _skaitiklis:number,
        private _daliklis:number
    ){
        this.prastinimas();
    }

    get sveikojiDalis(){
        return this._sveikojiDalis;
    }

    get skaitiklis(){
        return this._skaitiklis;
    }

    get daliklis(){
        return this._daliklis;
    }

    set sveikojiDalis(sveikojiDalis:number){
        this._sveikojiDalis=sveikojiDalis;
    }

    set skaitiklis(skaitiklis:number){
        this._skaitiklis=skaitiklis;
        this.prastinimas();
    }

    set daliklis(daliklis:number){
        this._daliklis=daliklis;
        this.prastinimas();
    }

    public toString():string{
        return this._sveikojiDalis+" "+this._skaitiklis+"/"+this._daliklis;
    }

    public pridetiInt(sk:number){
        this._sveikojiDalis+=sk;
    }

    public prideti(sv:number, skaitiklis:number, daliklis:number){
        this.pridetiInt(sv);
        this._skaitiklis=this._skaitiklis*daliklis  +  skaitiklis*this._daliklis;
        this._daliklis=this._daliklis*daliklis;
        this.prastinimas();
    }

    public pridetiTrupmena(t:Trupmena){
        this.prideti(t.sveikojiDalis, t.skaitiklis, t.daliklis);
    }

    private prastinimas(){
        let bdd=this.bdd(this._skaitiklis,this._daliklis);
        this._skaitiklis=this._skaitiklis/bdd;
        this._daliklis=this._daliklis/bdd;
        if (this._skaitiklis>this._daliklis){
            let sv=Math.floor(this._skaitiklis/this._daliklis);
            this._skaitiklis%=this._daliklis;
            this._sveikojiDalis+=sv;
        }
    }

    private bdd(x:number, y:number):number{
        for(let i=Math.min(x,y); i>0; i--)
            if (x%i==0 && y%i==0)
                return i;
        return 1;        
    }
    
}
 



const t1=new Trupmena(1,1,8);
const t2=new Trupmena(2,3,4);

t1.pridetiTrupmena(t2); 
t2.pridetiInt(3);
t2.pridetiTrupmena(t1);


console.log(t1.toString());