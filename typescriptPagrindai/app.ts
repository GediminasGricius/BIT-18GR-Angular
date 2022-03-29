let bdd=(x:number, y:number):number=>{
    for(let i=Math.min(x,y); i>0; i--)
        if (x%i==0 && y%i==0)
            return i;
    return 1;        
}


let faktorialas=(n:number):number => {
    let result=1;
    for (let i=1; i<=n; i++){
        result*=i; 
    }

    return result;
}

var myElem = document.getElementById('ElemID');
if (myElem!=null){
    myElem.onclick = function() {
        var ssa:HTMLInputElement=<HTMLInputElement>document.getElementById('ina');
       
        console.log("ZZZZ" + ssa.value);
    }
}
const app = document.getElementById("app");
if (app!=null){
    app.innerHTML="ZZZZaa";
}

console.log(bdd(10,15));