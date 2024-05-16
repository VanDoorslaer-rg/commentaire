// Sélectionner le titre de la liste des commentaires
let writeCommentTitle = document.querySelector("h3.text-lg.font-medium.text-warm-gray-900");

// Fonction pour ajouter un commentaire à la liste des commentaires
function ajouterCommentaire() {
    try {
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
    } catch (error) {
        console.error("Erreur lors de l'ajout du commentaire : ", error);
    }
}

document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault();

    try {
        if (!verifierChampsVides()) {
            ajouterCommentaire();
            effacerFormulaire();
        } else {
            afficherMessageErreur();
        }
    } catch (error) {
        console.error("Erreur lors de la soumission du formulaire : ", error);
    }
});

// Fonction pour vérifier si les champs du formulaire sont vides
function verifierChampsVides() {
    try {
        let prenom = document.getElementById("first-name").value.trim();
        let nom = document.getElementById("last-name").value.trim();
        let commentaire = document.getElementById("message").value.trim();

        if (prenom === '' || nom === '' || commentaire === '') {
            return true; 
        }
        return false;
    } catch (error) {
        console.error("Erreur lors de la vérification des champs : ", error);
        return true;
    }
}

// Fonction pour effacer le formulaire après l'ajout d'un commentaire
function effacerFormulaire() {
    try {
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("message").value = "";
    } catch (error) {
        console.error("Erreur lors de l'effacement du formulaire : ", error);
    }
}

// Fonction pour afficher un message d'erreur si des champs sont vides
function afficherMessageErreur() {
    try {
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 3000);
    } catch (error) {
        console.error("Erreur lors de l'affichage du message d'erreur : ", error);
    }
}
