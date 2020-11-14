const dugme = document.getElementById("dugme");
//Kreiranje i ispis matrice
let red = new Array(10); 
// Loop to create 2D array using 1D array 
for (let i = 0; i < red.length; i++) { 
    red[i] = new Array(10); 
} 

let pocetak = 1; 

// Loop to initilize 2D array elements. 
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) { 
        red[i][j] = pocetak++; 
    } 
} 

// Loop to display the elements of 2D array.  
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++)    { 
        document.write(red[i][j] + " "); 
    } 
    document.write("<br>"); 
}  
//Uzmi vrijednost iz input polja
function uzmiInput() {
    let input_vrijednost = document.getElementById("unos-field").value;  
    input_vrijednost = input_vrijednost -1 ;
    let novi_niz = [];
    let sNumber = input_vrijednost.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        novi_niz.push(+sNumber.charAt(i));
    }
    //console.log(novi_niz);
    
    saberi_sumu(novi_niz);
}

//PROVJERA OPSEGA
//Da li je broj manji od 1 ili veci od 100, tj. van opsega matrice 
provjeri_opseg = (vrijednost)=>{
    if(vrijednost<1 ||vrijednost>100){
        return false;
    }
}
function findingNeibors(myArray, i,j) {
    // TREBA DODATI AKO BROJ NEMA SUSJEDA
    let rowLimit = myArray.length-1;
    let columnLimit= myArray[0].length-1;
    let sum = myArray[i][j];
      for(let x = Math.max(0,i-1); x<=Math.min(i+1,rowLimit); x++){
      for(let y = Math.max(0,j-1); y<=Math.min(j+1,columnLimit); y++){
        if(x!==i || y!==j){ //ako je undefined ovdje dodaj da vrati false!
            console.log(myArray[x][y]);
            sum+=myArray[x][y];
        }
        }
      }
      return sum;
    }
saberi_sumu = (input_vrijednost) =>{
    var i = input_vrijednost[0];
    var j = input_vrijednost[1];
    console.log(findingNeibors(red,i,j));
}

dugme.addEventListener("click",uzmiInput);