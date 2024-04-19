
// Fonction pour vérifier si les champs du formulaire sont vides
function verifierChampsVides() {
    try {
        // Récupérer les valeurs des champs
        let prenom = document.getElementById("firstName").value.trim();
        let nom = document.getElementById("name").value.trim();
        let commentaire = document.getElementById("body").value.trim();

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
    document.getElementById("firstName").value = "";
    document.getElementById("name").value = "";
    document.getElementById("body").value = "";
}

// Fonction pour réactualiser la page après avoir soumis le formulaire
function reactualiserPage() {
    location.reload();
}

// Ajouter un écouteur d'événements pour le bouton d'envoi
document.getElementById("submitBtn").addEventListener("click", function (event) {
    // Empêcher le formulaire de se soumettre par défaut
    event.preventDefault();

    // Vérifier si les champs sont vides
    if (!verifierChampsVides()) {
        // Si les champs ne sont pas vides, ajouter le commentaire et effacer le formulaire
        ajouterCommentaire();
        effacerFormulaire();
    }
});

// Fonction pour ajouter un commentaire à la liste des commentaires
function ajouterCommentaire() {
    // Récupérer les valeurs des champs
    let prenom = document.getElementById("firstName").value;
    let nom = document.getElementById("name").value;
    let commentaire = document.getElementById("body").value;

    // Créer un nouvel élément de commentaire
    let newComment = document.createElement("div");
    newComment.classList.add("bg-white", "rounded-lg", "shadow-md", "p-6", "mb-6");

    // Contenu du commentaire
    let contenuCommentaire = `
        <h2 class="text-xl font-semibold mb-4">${prenom} ${nom}</h2>
        <p class="text-gray-700 mb-4">${commentaire}</p>
    `;

    // Ajouter le contenu au nouvel élément de commentaire
    newComment.innerHTML = contenuCommentaire;

    // Insérer le nouveau commentaire à la fin de la liste des commentaires
    let writeCommentTitle = document.querySelector("h2.text-2xl.font-bold.mb-4");
    writeCommentTitle.insertAdjacentElement("beforebegin", newComment);
}

// Effacer le formulaire lorsque la page est actualisée
window.addEventListener("load", effacerFormulaire);