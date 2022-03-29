
interface Point{
    x:number,
    y:number
}


let distance=(p:Point)=>{
    return Math.sqrt(p.x*p.x+p.y*p.y );
}

let taskas:Point={
  x:5,
  y:5
}



console.log("Atstumas iki taško 5; 5 yra : "+distance(taskas));
/*

*/

interface Human {
    firstName: string;
    age: number;
     kz?:number;
    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Max',
    age: 5,
    greet() {
        console.log("Labas " + this.firstName)
    }

}
max.greet();





/*


interface Zmogus{
    vardas:string,
    amzius:number,
    telefonas?:string
}

let apsilankymas=(lankytojas: Zmogus)=>{
    console.log("Pas mus apsilankė "+lankytojas.vardas+", jo amžius: "+lankytojas.amzius);
}

let paliko=(lankytojas: Zmogus)=>{
    console.log("Is pastato išėjo "+lankytojas.vardas+", jo amžius: "+lankytojas.amzius);
}

let lankytojas:Zmogus={
    vardas:"Jonas",
    amzius:21
};

apsilankymas(lankytojas);
paliko(lankytojas);
*/

