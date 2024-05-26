// Sélectionner le titre de la liste des commentaires
let writeCommentTitle = document.querySelector("h3.text-lg.font-medium.text-warm-gray-900");

// Fonction pour ajouter un commentaire à la liste des commentaires
function ajouterCommentaire() {
    let prenom = document.getElementById("first-name").value;
    let nom = document.getElementById("last-name").value;
    let commentaire = document.getElementById("message").value;

    let newComment = document.createElement("div");
    newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500", "py-10", "border-t", "border-gray-200");

    let contenuCommentaire = `
        <div class="flex-1">
            <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${commentaire}</p>
            </div>
        </div>
    `;

    newComment.innerHTML = contenuCommentaire;

    let commentList = document.getElementById("comment-list");
    commentList.appendChild(newComment);
}

document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault();

    if (!verifierChampsVides()) {
        ajouterCommentaire();
        effacerFormulaire();
    } else {
        afficherMessageErreur();
    }
});

// Fonction pour vérifier si les champs du formulaire sont vides
function verifierChampsVides() {
    let prenom = document.getElementById("first-name").value;
    let nom = document.getElementById("last-name").value;
    let commentaire = document.getElementById("message").value;
    return prenom === "" || nom === "" || commentaire === "";
}

// Fonction pour afficher un message d'erreur
function afficherMessageErreur() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
}

// Fonction pour effacer les champs du formulaire
function effacerFormulaire() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";
}
