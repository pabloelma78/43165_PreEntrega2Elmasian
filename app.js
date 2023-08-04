const datosAlumnos = [];
const alumno1 = "Pablo";
const alumno2 = "Pedro";
const alumno3 = "Tomas";
const alumno4 = "Lorena";
const alumno5 = "Laura";
const alumno6 = "Lia";
const alumno7 = "Emiliano";
const constantes = [alumno1,alumno2,alumno3,alumno4,alumno5,alumno6,alumno7]
const numeros = [1,2,3,4,5,6,7,8,9,10]
console.log("Listado de alumnos que rindieron el examen:")
for (let i=0; i < constantes.length; i++){
    console.log(constantes[i]);
}
let nota1 = parseInt(prompt("ingrese nota del alumno " + alumno1));
while (!numeros.includes(nota1)){
    nota1 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno1));
} 
let nota2 = parseInt(prompt("ingrese nota del alumno " + alumno2));
while (!numeros.includes(nota2)){
    nota2 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno2));
} 
let nota3 = parseInt(prompt("ingrese nota del alumno " + alumno3));
while (!numeros.includes(nota3)){
    nota3 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno3));
} 
let nota4 = parseInt(prompt("ingrese nota del alumno " + alumno4));
while (!numeros.includes(nota4)){
    nota4 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno4));
} 
let nota5 = parseInt(prompt("ingrese nota del alumno " + alumno5));
while (!numeros.includes(nota5)){
    nota5 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno5));
} 
let nota6 = parseInt(prompt("ingrese nota del alumno " + alumno6));
while (!numeros.includes(nota6)){
    nota6 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno6));
} 
let nota7 = parseInt(prompt("ingrese nota del alumno " + alumno7));
while (!numeros.includes(nota7)){
    nota7 = parseInt(prompt ("ingrese un valor valido (número del 1 al 10) para el alumno " + alumno7));
}
const A1 = [alumno1,nota1,""];
const A2 = [alumno2,nota2,""];
const A3 = [alumno3,nota3,""];
const A4 = [alumno4,nota4,""];
const A5 = [alumno5,nota5,""];
const A6 = [alumno6,nota6,""];
const A7 = [alumno7,nota7,""];
datosAlumnos.push(A1,A2,A3,A4,A5,A6,A7);
console.log("Los siguientes alumno aprobaron el examen:");
for (let i = 0; i < datosAlumnos.length; i++){
    if (datosAlumnos[i][1]>=6){
        console.log(datosAlumnos[i][0]);
    }
}
function mejoresAlumnos(c){
    let maximo=Math.max(nota1,nota2,nota3,nota4,nota5,nota6,nota7);
        for (let i = 0; i < c.length; i++){
        if (c[i][1]===maximo){
            console.log(c[i][0]," Nota:", c[i][1])
        }
    }
} 
console.log ("Los alumnos con mejores notas son:")
mejoresAlumnos(datosAlumnos);

function recuperatorio (a){
    let rec1= 0;
    let rec2= 0;
    let rec3= 0;
    let rec4= 0;
    let rec5= 0;
    alert("Exámen recuperatorio para el alumno " + a);
    rec1= parseInt(prompt ("1_ 4 x 3 ="));
    rec2= parseInt(prompt ("1_ 5 x 9 ="));
    rec3= parseInt(prompt ("1_ 4 x 8 ="));
    rec4= parseInt(prompt ("1_ 100 x 3 ="));
    rec5= parseInt(prompt ("1_ 15 x 3 ="));
    return {rec1,rec2,rec3,rec4,rec5};  
}

for (let i = 0; i < datosAlumnos.length; i++){
    if (datosAlumnos[i][1]<6){
        let nota11=0;
        let resultado=recuperatorio(datosAlumnos[i][0])
        if (resultado.rec1== 12){
            nota11=nota11 + 2;
        }
        if (resultado.rec2== 45){
            nota11=nota11 + 2;
        }
        if (resultado.rec3== 32){
            nota11=nota11 + 2;
        }
        if (resultado.rec4== 300){
            nota11=nota11 + 2;
        }
        if (resultado.rec5== 45){
            nota11=nota11 + 2;
        }
        datosAlumnos[i][2] = nota11
        console.log ("nota del recuperatorio del alumno  " + datosAlumnos[i][0] + ":  " + datosAlumnos[i][2])
    }
    }