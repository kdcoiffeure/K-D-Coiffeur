document.getElementById('booking-form').addEventListener('submit', function(e) {
    // Ne pas empecher l'envoi a Formspree, juste montrer une confirmation visuelle
    setTimeout(() => {
        document.getElementById('confirmation').style.display = 'block';
        setTimeout(() => {
            document.getElementById('confirmation').style.display = 'none';
        }, 3000);
    }, 500); // Petit delai pour simuler l'envoi
});