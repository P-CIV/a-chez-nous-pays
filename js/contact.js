document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const submitButton = form.querySelector('.form__submit');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Récupérer les données du formulaire
        const formData = {
            nom: document.getElementById('name').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Désactiver le bouton pendant l'envoi
        submitButton.disabled = true;
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';

        try {
            // Appel à l'API Gateway
            const response = await fetch('https://9zr82tr35d.execute-api.eu-west-1.amazonaws.com/prod/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                //Message envoyé avec succès
                alert('Message envoyé avec succès ! Merci de nous avoir contactés.');
                form.reset();
            } else {
                // Erreur de l'API
                alert(' Erreur : ' + (result.message || 'Impossible d\'envoyer le message'));
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert(' Erreur réseau : Vérifiez votre connexion et réessayez.');
        } finally {
            // Réactiver le bouton
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
});
