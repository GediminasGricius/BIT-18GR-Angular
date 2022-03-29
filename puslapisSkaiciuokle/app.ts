const output=document.getElementById("atsakymas");
const btSkaiciuoti=document.getElementById("skaiciuoti");
let inX = <HTMLInputElement> document.getElementById("var_x");
let inY = <HTMLInputElement> document.getElementById("var_y");   



interface Point{
    x:number,
    y:number
}

const distance=(p:Point)=>{
    return Math.sqrt(p.x*p.x+p.y*p.y );
}

let taskas:Point={
    x:5,
    y:5
}
const fSuskaiciuoti=()=>{ 
    if (output!=null){
        output.innerHTML="Atsakymas: "+distance(taskas);
    }
}



if (btSkaiciuoti!=null){
    taskas.x=+inX.value;
    taskas.y=+inY.value;
    btSkaiciuoti.onclick=fSuskaiciuoti;
}



