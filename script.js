document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const confirmationDiv = document.getElementById("confirmation");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
        
        // Récupération des valeurs des champs
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const firstname = document.getElementById("firstname").value.trim();
        const birthDate = document.getElementById("date").value;
        const phone = document.getElementById("call").value.trim();
        const motivation = document.getElementById("message").value.trim();
        
        // Vérification des champs obligatoires
        if (!email || !name || !firstname || !birthDate || !phone || !motivation) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        // Calcul de l'âge à partir de la date de naissance
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        // Vérification de l'âge (optionnel : doit avoir au moins 18 ans)
        if (age < 18) {
            alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
            return;
        }

        // Affichage des informations dans le bloc de confirmation
        confirmationDiv.innerHTML = `
            <h3>Informations sur l'inscription</h3>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Prénom :</strong> ${firstname}</p>
            <p><strong>Âge :</strong> ${age} ans</p>
            <p><strong>Numéro :</strong> ${phone}</p>
            <p><strong>Motivation :</strong> ${motivation}</p>
        `;

        // Afficher la confirmation
        confirmationDiv.classList.add("visible");

        // Réinitialiser le formulaire après soumission
        form.reset();
    });
});