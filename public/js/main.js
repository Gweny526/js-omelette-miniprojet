class Personne  {
    constructor (nom, lieu, argent){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = []
        this.mainGauche = []
    };
    seDeplacer = (nom) => {
        this.lieu = nom;
        console.log(this.nom + "se déplace vers" + nom);
        // lieu.contenu.push(this);
    };
    payerArticle = (Ingredients) =>{
        this.argent = this.argent - Ingredients.prix
    }
    couper(ingredient){
        ingredient.etat = 'coupé';
        console.log(`${ingredient.nom} est maintenant ${ingredient.etat}`);
    }
}
let personne = new Personne("Gweny", "Schaerbeek", 150,)
console.log(personne);



let Maison = {
    nom : 'maison',
    personnes:[],
}

let Outil = {
    nom : 'couteau',
    action : personne.couper
}

// let Produits = {
//     oignon:{
//         nom : 'oignon',
//         etat : 'entier',
//         prix : 1,
//     },
//     oeuf:{
//         nom : 'oeuf',
//         etat : "cru",
//         prix : 1,
//     },
//     epice : {
//         nom : "epice",
//         etat : "entier",
//         prix : 3,
//     },
//     fromage : {
//         nom : "fromage",
//         etat : 'coupé',
//         prix: 3,
//     }
// }
// class ingredient
// objet chaque ingredient

// class ingredient{
//     constructor(oignon, oeuf, epice, fromage)
// }
class Ingredients {
    constructor (nom, etat, prix) {
        this.nom = nom,
        this.etat = etat
        this.prix = prix
    }
}
let oignon = new Ingredients ("oignon", "coupé", 2);
console.log(oignon);
let oeuf = new Ingredients ("oeuf", "entier", 2);
let epice = new Ingredients ("epice", "moulu", 3);
let fromage = new Ingredients ("fromage", "entier", 8);

let Epicerie ={
    nom: "epicerie",
    personne :  [],
    paniers :[
        {
        nom: "panier1",
        contenu : [],
    },
    {
        nom: "panier2",
        contenu : [],
    },
    {
        nom: "panier3",
        contenu : [],
    },
    {
        nom: "panier4",
        contenu : [],
    },
    {
        nom: "panier5",
        contenu : [],
    },
],
    
    ingredients: [oignon, oeuf, epice, fromage]
}



let Poêle = {
    // setTimeout(() => {
    //     console.log(votre plat : ${plat.nom} est ${plat.etats});
    // }, 4000);
    contenu: [],
    cuire(){
        setTimeout(() => {
            this.contenu[0].etat = "cuit";
            console.log(`Bip bip bip, c'est prêt! Bon appétit!`);
        }, 4000);
    }
}

let Bol = {
    contenu: [],
    melanger(nomMelange){
        let newMelange ={
            nom : nomMelange,
            etat: "pas cuit"

        }
        this.contenu.splice(0,4, newMelange)
        
    }
}
// let personne2 = new Personne("Gweny", )
// console.log(`${personne.nom} est actuellement à la ${personne.seDeplacer}`);

// console.log(`${personne.nom} est actuellement à l'${Epicerie.nom}`);
// mon personnage rentre a la maison
personne.seDeplacer(Maison.nom);
console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);
// mon personnage va a l'épicerie
personne.seDeplacer(Epicerie.nom);
console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);

// prendre le panier
personne.mainDroite.push(Epicerie.paniers[0])
Epicerie.paniers[0].nom.slice(0, 1)
console.log(personne.mainDroite);
// console.log(personne.nom + " a pris le dernier " +  Epicerie.paniers[0].type + " dans sa main droite");
console.log(`${personne.nom} a pris un ${Epicerie.paniers[0].nom} dans sa main droite`);


// supprimé le panier des paniers
Epicerie.paniers.pop();
console.log(Epicerie.paniers);

// prendre les ingredient
console.log("Gweny ajoute les ingredient suivant dans son panier");
for(let i = 0; i < Ingredients.length; i++){
    const element = Ingredients[i];
    personne.mainDroite[0].contenu.push(element)
    console.log(`${Ingredients.nom} pris`);
}    
console.log("voici le panier de " + personne.nom + Epicerie.ingredients[0,1,2,3]);

// payer
// personne.mainDroite[0].contenu.forEach(element => personne.payerArticle(element))
// console.log(`il te reste ${personne.argent}`);
personne.seDeplacer(" maison")
console.log(`${personne.nom} retourne à la ${Maison.nom}`);

Bol.contenu.forEach(element => {
    console.log(element.etat);
    if(element.etat == "entier"){
        personne.couper(element)
        console.log(`${element.nom} à été coupé`);
    }
})

Bol.melanger("omelette")
console.log("on melange le tous pour faire la préparaton de l'omelette");
// push dans la poele
Poêle.contenu.push(Bol.contenu[0])
// supprimer du bol
Bol.contenu.splice[0,1]
// cuisson
Poêle.cuire()