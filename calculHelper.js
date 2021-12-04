

function calculAir(longueur, largeur){
    return  multiplication(longueur, largeur);
}

function calculAirCarre(longueur) {
    return calculAir(longueur, longueur);
}

function multiplication(a, b) {
    return a*b;
}

function afficherMessageCalculAir(a, b) {
    const air = calculAir(a, b);
    let libelle = `L'air est de ${air}`;
    if(isNaN(air) || typeof a !== "number" || typeof b !== "number") {
        libelle = `L'air ne peut pas être calculée`;
    }
    return libelle;
}

export {
    calculAir,
    calculAirCarre,
    multiplication,
    afficherMessageCalculAir
} 