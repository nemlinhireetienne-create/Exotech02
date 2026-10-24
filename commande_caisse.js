const budgetClient = 20000;
const prixCahier = 1500;
const quantiteCahiers = 4;
const prixStylo = 500;
const quantiteStylos = 3;

// 2. Calcul des montants des cahiers et stylos
const montantCahiers = prixCahier * quantiteCahiers;
const montantStylos = prixStylo * quantiteStylos;

3. //Calcul du montant total
const montantTotal = montantCahiers + montantStylos;

4. //Vérification du budget
let resultatBudget;
if (montantTotal <= budgetClient) {
  resultatBudget = "Budget suffisant";
} else {
  resultatBudget = "Budget insuffisant";
}

5. //Affichage des résultats
console.log("Montant des cahiers :", montantCahiers, "FCFA");
console.log("Montant des stylos :", montantStylos, "FCFA");
console.log("Montant total :", montantTotal, "FCFA");
console.log("Résultat :", resultatBudget);