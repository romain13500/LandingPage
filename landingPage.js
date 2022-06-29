function confirm(){
    var positif = "Félicitation"
    var negatif = "CIAO CIAO"
    var confirm = prompt("Voulez vous continuer ? (tapez oui pour continuer)")

    if(confirm === "OUI") {
        alert(positif);
        
        
          
    }   
    else if(confirm === "oui") {
        alert(positif);
        }
    else{
        alert(negatif);
        document.location.reload();
    }
}
