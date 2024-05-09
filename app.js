// Récupérer l'élément titre "Écrire un commentaire"
let writeCommentTitle = document.querySelector(".H2-style");

// Fonction pour ajouter un commentaire à la liste des commentaires
function ajouterCommentaire() {
    // Récupérer les valeurs des champs
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let commentaire = document.getElementById("commentaire").value;

    // Créer un nouvel élément de commentaire
    let newComment = document.createElement("div");
    newComment.classList.add("commentaire");

    // Contenu du commentaire
    let contenuCommentaire = `
        <h2>${prenom} ${nom}</h2>
        <p>${commentaire}</p>
    `;

    // Ajouter le contenu au nouvel élément de commentaire
    newComment.innerHTML = contenuCommentaire;

    // Insérer le nouveau commentaire juste après le formulaire
    writeCommentTitle.parentElement.insertBefore(newComment, writeCommentTitle);
}

// Ajouter un écouteur d'événements pour le bouton d'envoi
document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    // Empêcher le formulaire de se soumettre par défaut
    event.preventDefault();

    // Vérifier si les champs sont vides
    if (!verifierChampsVides()) {
        // Si les champs ne sont pas vides, ajouter le commentaire
        ajouterCommentaire();
        // Effacer le formulaire
        effacerFormulaire();
    }
});

// Fonction pour vérifier si les champs du formulaire sont vides
function verifierChampsVides() {
    try {
        // Récupérer les valeurs des champs
        let prenom = document.getElementById("prenom").value.trim();
        let nom = document.getElementById("nom").value.trim();
        let commentaire = document.getElementById("commentaire").value.trim();

        // Vérifier si l'un des champs est vide
        if (prenom === '' || nom === '' || commentaire === '') {
            throw new Error("Veuillez remplir tous les champs du formulaire.");
        }
        return false; // Retourner false si tous les champs sont remplis
    } catch (error) {
        alert(error.message);
        return true; // Retourner true si au moins un champ est vide
    }
}

// Fonction pour effacer le formulaire
function effacerFormulaire() {
    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";
}
