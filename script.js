document.getElementById('booking-form').addEventListener('submit', function(e) {
    // Ne pas empecher l'envoi a Formspree, juste montrer une confirmation visuelle
    setTimeout(() => {
        document.getElementById('confirmation').style.display = 'block';
        setTimeout(() => {
            document.getElementById('confirmation').style.display = 'none';
        }, 3000);
    }, 500); // Petit delai pour simuler l'envoi
});

// Gestion du formulaire
document.getElementById('booking-form').addEventListener('submit', function(e) {
    setTimeout(() => {
        const confirmation = document.getElementById('confirmation');
        confirmation.style.display = 'block';
        setTimeout(() => {
            confirmation.style.display = 'none';
        }, 4000);
    }, 500);
});

// Gestion du menu hamburger pour mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});