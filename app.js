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
console.log("Los siguientes alumno aprobaron el examen:")
if(nota1>=6){
    console.log(alumno1)
}
if(nota2>=6){
    console.log(alumno2)
}
if(nota3>=6){
    console.log(alumno3)
}
if(nota4>=6){
    console.log(alumno4)
}
if(nota5>=6){
    console.log(alumno5)
}
if(nota6>=6){
    console.log(alumno6)
}
if(nota7>=6){
    console.log(alumno7)
}

function mejoresAlumnos (a,b,c,d,e,f,g){
    let maximo=Math.max(a,b,c,d,e,f,g);
    if(a==maximo){
        console.log(alumno1 + " Nota " + nota1)
    }
    if(b==maximo){
        console.log(alumno2 + " Nota " + nota2)
    }
    if(c==maximo){
        console.log(alumno3 + " Nota " + nota3)
    }
    if(d==maximo){
        console.log(alumno4 + " Nota " + nota4)
    }
    if(e==maximo){
        console.log(alumno5 + " Nota " + nota5)
    }
    if(f==maximo){
        console.log(alumno6 + " Nota " + nota6)
    }
    if(g==maximo){
        console.log(alumno7 + " Nota " + nota7)
    }
}
console.log ("Los alumnos con mejores notas son:")
mejoresAlumnos(nota1,nota2,nota3,nota4,nota5,nota6,nota7);
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

if(nota1<6){
    let resultado1 = recuperatorio (alumno1);
    let nota11= 0;
    if (resultado1.rec1== 12){
        nota11=nota11 + 2;
    }
    if (resultado1.rec2== 45){
        nota11=nota11 + 2;
    }
    if (resultado1.rec3== 32){
        nota11=nota11 + 2;
    }
    if (resultado1.rec4== 300){
        nota11=nota11 + 2;
    }
    if (resultado1.rec5== 45){
        nota11=nota11 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno1 + ": " + nota11)
}
if(nota2<6){
    let resultado2 = recuperatorio (alumno2);
    let nota22= 0;
    if (resultado2.rec1== 12){
        nota22=nota22 + 2;
    }
    if (resultado2.rec2== 45){
        nota22=nota22 + 2;
    }
    if (resultado2.rec3== 32){
        nota22=nota22 + 2;
    }
    if (resultado2.rec4== 300){
        nota22=nota22 + 2;
    }
    if (resultado2.rec5== 45){
        nota22=nota22 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno2 + ": " + nota22)
}
if(nota3<6){
    let resultado3 = recuperatorio (alumno3);
    let nota33= 0;
    if (resultado3.rec1== 12){
        nota33=nota33 + 2;
    }
    if (resultado3.rec2== 45){
        nota33=nota33 + 2;
    }
    if (resultado3.rec3== 32){
        nota33=nota33 + 2;
    }
    if (resultado3.rec4== 300){
        nota33=nota33 + 2;
    }
    if (resultado3.rec5== 45){
        nota33=nota33 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno3 + ": " + nota33)
}
if(nota4<6){
    let resultado4 = recuperatorio (alumno4);
    let nota44= 0;
    if (resultado4.rec1== 12){
        nota44=nota44 + 2;
    }
    if (resultado4.rec2== 45){
        nota44=nota44 + 2;
    }
    if (resultado4.rec3== 32){
        nota44=nota44 + 2;
    }
    if (resultado4.rec4== 300){
        nota44=nota44 + 2;
    }
    if (resultado4.rec5== 45){
        nota44=nota44 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno4 + ": " + nota44);
}
if(nota5<6){
    let resultado5 = recuperatorio (alumno5);
    let nota55= 0;
    if (resultado5.rec1== 12){
        nota55=nota55 + 2;
    }
    if (resultado5.rec2== 45){
        nota55=nota55 + 2;
    }
    if (resultado5.rec3== 32){
        nota55=nota55 + 2;
    }
    if (resultado5.rec4== 300){
        nota55=nota55 + 2;
    }
    if (resultado5.rec5== 45){
        nota55=nota55 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno5 + ": " + nota55);
}
if(nota6<6){
    let resultado6 = recuperatorio (alumno6);
    let nota66= 0;
    if (resultado6.rec1== 12){
        nota66=nota66 + 2;
    }
    if (resultado6.rec2== 45){
        nota66=nota66 + 2;
    }
    if (resultado6.rec3== 32){
        nota66=nota66 + 2;
    }
    if (resultado6.rec4== 300){
        nota66=nota66 + 2;
    }
    if (resultado6.rec5== 45){
        nota66=nota66 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno6 + ": " + nota66);
}
if(nota7<6){
    let resultado7 = recuperatorio (alumno7);
    let nota77= 0;
    if (resultado.rec1== 12){
        nota77=nota77 + 2;
    }
    if (resultado.rec2== 45){
        nota77=nota77 + 2;
    }
    if (resultado.rec3== 32){
        nota77=nota77 + 2;
    }
    if (resultado.rec4== 300){
        nota77=nota77 + 2;
    }
    if (resultado.rec5== 45){
        nota77=nota77 + 2;
    }
    console.log ("nota del recuperatorio del alumno " + alumno7 + ": " + nota77);
}