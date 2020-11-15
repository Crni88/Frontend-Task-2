//Done by Tarik Kahric
//import DOM elemenata
const dugme = document.getElementById("dugme");
const matrica = document.getElementById("matrica");
const uspjeh = document.getElementById("uspjeh");
const broj = document.getElementById("broj");
const suma = document.getElementById("suma");
const greska = document.getElementById("greska");

//Kreiranje i ispis matrice
let red = new Array(10); 
// Petlja za kreiranje 2D niza pomocu 1D niza 
for (let i = 0; i < red.length; i++) { 
    red[i] = new Array(10); 
} 
let pocetak = 1; 
// Postavi elemente u matrici
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) { 
        red[i][j] = pocetak++; 
    } 
} 
// Ispis matrice 
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++)    { 
        document.write(red[i][j] + " "); 
    } 
    document.write("<br>"); 
}  
//Kraj kreiranja ispisa


//PROVJERA OPSEGA
//Da li je broj manji od 1 ili veci od 100, tj. van opsega matrice 
provjeri_opseg = (vrijednost)=>{
    if(vrijednost<1 ||vrijednost>100){
        return true;
    }
    return false;
}//Kraj provjere 

//Uzmi vrijednost iz input polja
function uzmiInput() {
    let input_vrijednost = document.getElementById("unos-field").value;  
    if(provjeri_opseg(input_vrijednost)){
        uspjeh.style.display = "none";
        greska.style.display = "block"; 
        greska.innerHTML=("Uneseni broj nije u opsegu matrice!");  
    }
    else{  
        input_vrijednost = input_vrijednost -1 ;
        let novi_niz = [];
        let sNumber = input_vrijednost.toString();
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            novi_niz.push(+sNumber.charAt(i));
        }
        broj.innerHTML = input_vrijednost+1;  
        
        saberi_sumu(novi_niz);
    }
}

function nadjiSusjede(myArray, i,j) {
    let brojRedova = myArray.length-1;
    let brojKolona= myArray[0].length-1;
    let sum = myArray[i][j];
    let brojac=0;
      for(let x = Math.max(0,i-1); x<=Math.min(i+1,brojRedova); x++){
      for(let y = Math.max(0,j-1); y<=Math.min(j+1,brojKolona); y++){
        if(x!==i || y!==j){ 
            sum+=myArray[x][y];
            brojac++;
        }
        }
      }
      if(brojac === 8){ //Ako ima 8 susjeda
          return sum;
    }else{
        greska.style.display = "block"; 
        greska.innerHTML=("Uneseni broj nema 8 susjeda!");        
        }
    }
saberi_sumu = (input_vrijednost) =>{
    let i = input_vrijednost[0];
    let j = input_vrijednost[1];
    let suma_sumarum = nadjiSusjede(red,i,j);
    if(suma_sumarum === undefined){
        uspjeh.style.display = "none";
    }else{
        greska.style.display = "none"; 
        uspjeh.style.display = "block";
        suma.innerHTML = suma_sumarum;
    }
}

dugme.addEventListener("click",uzmiInput );