// Sélection des éléments du DOM
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('header');
let lastScrollPosition = 0;

// Fonction de toggle pour afficher/masquer le menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Fonction pour masquer ou afficher la navbar selon le défilement
window.addEventListener('scroll', () => {
    let currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // L'utilisateur fait défiler vers le bas, cacher la navbar
        header.classList.add('hidden');
    } else {
        // L'utilisateur fait défiler vers le haut, afficher la navbar
        header.classList.remove('hidden');
    }

    // Mettre à jour la position du dernier défilement
    lastScrollPosition = currentScrollPosition;
});

// Sélection des éléments du DOM pour les stages
const btnStage1 = document.getElementById('btnStage1');
const btnStage2 = document.getElementById('btnStage2');
const btnFermer = document.getElementById('btnFermer');
const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');

// Sélection des nouveaux boutons pour la section Veille
const btnVeille = document.getElementById('btnVeille');
const btnFermerVeille = document.getElementById('btnFermerVeille');
const veille = document.getElementById('veille'); // L'ID de la section veille

// Masquer la section Veille au chargement du site
veille.classList.remove('active'); // Assurez-vous que la section commence cachée

// Fonction pour afficher Stage 1
btnStage1.addEventListener('click', () => {
    stage1.classList.add('active');
    stage2.classList.remove('active');
});

// Fonction pour afficher Stage 2
btnStage2.addEventListener('click', () => {
    stage2.classList.add('active');
    stage1.classList.remove('active');
});

// Fonction pour fermer les sections
btnFermer.addEventListener('click', () => {
    stage1.classList.remove('active');
    stage2.classList.remove('active');
});

// Fonction pour afficher la section Veille
btnVeille.addEventListener('click', () => {
    veille.classList.add('active'); // Afficher la section Veille
});

// Fonction pour fermer la section Veille
btnFermerVeille.addEventListener('click', () => {
    veille.classList.remove('active'); // Masquer la section Veille
});

// Sélectionner les éléments pour les boutons GLPI
const glpiButton = document.getElementById('GLPI');
const glpiButton2 = document.getElementById('GLPI2');
const glpiButton3 = document.getElementById('GLPI3');
const fermerButton = document.getElementById('FermerTP');
const pdfContainer = document.getElementById('pdfContainer');

// Fonction pour afficher le PDF pour le bouton GLPI
glpiButton.addEventListener('click', () => {
    if (pdfContainer.style.display === "none" || pdfContainer.style.display === "") {
        pdfContainer.style.display = "block";
        pdfContainer.innerHTML = `<iframe src="B1_TP1_SLAM.pdf" frameborder="0"></iframe>`;
    } else {
        pdfContainer.style.display = "none";
        pdfContainer.innerHTML = "";
    }
});

// Fonction pour le bouton GLPI2 (afficher les questions sur GLPI)
glpiButton2.addEventListener('click', () => {
    if (pdfContainer.style.display === "none" || pdfContainer.style.display === "") {
        pdfContainer.style.display = "block";
        pdfContainer.innerHTML = `<iframe src="B1_TP2_SLAM.pdf" frameborder="0"></iframe>`;
    } else {
        pdfContainer.style.display = "none";
        pdfContainer.innerHTML = "";
    }
});

// Fonction pour le bouton GLPI3 (afficher le helpdesk dans GLPI)
glpiButton3.addEventListener('click', () => {
    if (pdfContainer.style.display === "none" || pdfContainer.style.display === "") {
        pdfContainer.style.display = "block";
        pdfContainer.innerHTML = `<iframe src="B1_TP3_SLAM.pdf" frameborder="0"></iframe>`;
    } else {
        pdfContainer.style.display = "none";
        pdfContainer.innerHTML = "";
    }
});

// Fonction pour fermer le PDF
fermerButton.addEventListener('click', () => {
    pdfContainer.style.display = "none";
    pdfContainer.innerHTML = "";
});
