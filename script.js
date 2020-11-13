const dugme = document.getElementById("dugme");



//Kreiranje i ispis matrice
// Create one dimensional array 
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

function u_nizu(niz,vrijednost){
    return [niz].indexOf(vrijednost) != -1;
}


provjeri_redove_kolone = (vrijednost) =>{
    
    var prvi_red = red.slice(0,1);
        var zadnji_red = red.slice(9,10);
        var prva_kolona = red.map(function(value,index) { return value[0]; });
        var zadnja_kolona = red.map(function(value,index) { return value[9]; });   
    
    if(u_nizu(prvi_red,vrijednost)){
        return true;
    }else{
        return false;
    }

}

saberi_sumu = (input_vrijednost) =>{
    console.log("Pozvala se saberi sumu",input_vrijednost);
    if(!provjeri_opseg(input_vrijednost)){
      // console.log("nije validno");
    }
    
}

dugme.addEventListener("click",uzmiInput);