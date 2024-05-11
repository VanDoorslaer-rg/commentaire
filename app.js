
let writeCommentTitle = document.querySelector(".H2-style");

// Fonction pour ajouter un commentaire à la liste des commentaires
function ajouterCommentaire() {
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let commentaire = document.getElementById("commentaire").value;

    let newComment = document.createElement("div");
    newComment.classList.add("commentaire");

    let contenuCommentaire = `
        <h2>${prenom} ${nom}</h2>
        <p>${commentaire}</p>
    `;

    newComment.innerHTML = contenuCommentaire;

    let hrElement = document.createElement("hr");
    writeCommentTitle.parentElement.insertBefore(hrElement, writeCommentTitle);
    writeCommentTitle.parentElement.insertBefore(newComment, hrElement.nextSibling);
}

document.querySelector("button[type='submit']").addEventListener("click", function (event) {
    event.preventDefault();

    if (!verifierChampsVides()) {
        ajouterCommentaire();
        effacerFormulaire();
    }
});

// Fonction pour vérifier si les champs du formulaire sont vides
function verifierChampsVides() {
    try {
        
        let prenom = document.getElementById("prenom").value.trim();
        let nom = document.getElementById("nom").value.trim();
        let commentaire = document.getElementById("commentaire").value.trim();

        if (prenom === '' || nom === '' || commentaire === '') {
            throw new Error("Veuillez remplir tous les champs du formulaire.");
        }
        return false; 
    } catch (error) {
        alert(error.message);
        return true; 
    }
}


function effacerFormulaire() {
    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";
}
