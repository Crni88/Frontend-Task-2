const dugme = document.getElementById("dugme");


//Kreiranje i ispis matrice
let red = new Array(10); 


// Loop to create 10D array using 1D array 
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
    const input_vrijednost = document.getElementById("unos-field").value;    
   saberi_sumu(input_vrijednost);
}
//Da li je broj manji od 1 ili veci od 100, tj. van opsega matrice 
provjeri_opseg = (vrijednost)=>{
    if(vrijednost<1 ||vrijednost>100){
        return false;
    }
}
function findingNeibors(myArray, i,j) {

    let rowLimit = myArray.length-1;
    let columnLimit= myArray[0].length-1;
    let sum = myArray[i][j];
    
    if(i<0 || j< 0) {
        console.log("invalid Index")
        return
      };
    
    if(i>rowLimit || j> columnLimit){
        console.log("You are Out Of Bound");
        return;
    }
    
      for(let x = Math.max(0,i-1); x<=Math.min(i+1,rowLimit); x++){
      for(let y = Math.max(0,j-1); y<=Math.min(j+1,columnLimit); y++){
        if(x!==i || y!==j){
            console.log(myArray[x][y]);
            sum+=myArray[x][y];
        }
        }
      }
      return sum;
    }
    
    

saberi_sumu = (input_vrijednost) =>{
    console.log(findingNeibors(red,4,4));
}

dugme.addEventListener("click",uzmiInput);