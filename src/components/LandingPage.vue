<template>
  <div>
    <nav>
      <p class="zizi">OPEN-BAR</p>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/whoareoui">Qui sommes nous ?</a></li>
        <li><a href="https://www.noustoutes.org/">NousToutes54 ?</a></li>
      </ul>
    </nav>
    <div class="background-image">
      <div class="content-overlay">
        <h1 class="open">BIENVENUE SUR OPEN-BAR !</h1>
        <p class="under-open">Soyez en securite en decouverant Nancy !</p>
        <button>
          <a href="/nancy" class="beautifull"><span>Je me lance</span></a>
        </button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.zizi {
  margin-top: 2%;
  font-size: 30px;
  font-family: "RenogareSoft-Regular", sans-serif;
}
.beautifull {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}

.beautifull::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleY(1);
}

.beautifull:hover::before {
  transform: scaleY(0);
}

.beautifull::after {
  content: '';
  position: absolute;
  left: 6px;
  top: -2px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background-color: #212121;
  transition: 0.3s ease-in-out;
  transform: scaleX(1);
  transition-delay: 0.5s;
}

.beautifull:hover::after {
  transform: scaleX(0);
}

a span {
  position: relative;
  z-index: 3;
}

button {
  background-color: none;
  text-decoration: none;
  background-color: #212121;
  border: none;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5; /* Couleur de fond */
  margin: 0; /* Assure que le corps ne crée pas de marge */
  padding: 0; /* Assure qu'il n'y a pas de remplissage */
  overflow-x: hidden; /* Empêche le défilement horizontal */
}

/* Barre de navigation */
nav {
  position: fixed; /* Position fixe pour rester en haut de la page */
  top: 0; /* Alignement en haut */
  left: 0; /* Alignement à gauche */
  width: 100%; /* Largeur de la barre de navigation sur toute la largeur de la fenêtre */
  background-color: #333; /* Couleur de fond de la barre de navigation */
  color: #fff; /* Couleur du texte de la barre de navigation */
  height: 80px; /* Hauteur de la barre de navigation */
  padding: 0 20px;
  display: flex;
  align-items: center;
  z-index: 999; /* Assure que la barre de navigation est au-dessus de tous les autres éléments */
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

/* Conteneur de l'image de fond */
.background-image {
  position: fixed; /* Position fixe pour couvrir toute la page */
  top: 0; /* Alignement en haut */
  left: 0; /* Alignement à gauche */
  width: 100%; /* Largeur sur toute la largeur de la fenêtre */
  height: 100%; /* Hauteur sur toute la hauteur de la fenêtre */
  background-image: url('/src/assets/test.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Assure que l'image de fond est en dessous de tous les autres éléments */
}

/* Layer flou */
.background-image::before {
  content: ''; /* Obligatoire pour une pseudo-classe */
  position: absolute; /* Position absolue par rapport au conteneur parent */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Couleur du layer avec une opacité */
  backdrop-filter: blur(15px); /* Flou plus prononcé */
}

/* Contenu par-dessus l'image */
.content-overlay {
  position: relative; /* Position relative pour centrer le contenu */
  text-align: center;
  color: #fff;
  padding-top: 21%; /* Espace pour le contenu par-dessus l'image */
}

/* Style pour le texte */
.content-overlay h1.open {
  font-size: 60px;
  font-family: "RenogareSoft-Regular", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}

.content-overlay p.under-open {
  font-size: 20px;
  font-family: "RenogareSoft-Regular", sans-serif;
  font-weight: bold;
  margin-bottom: 50px;
}

/* Style pour la section Nancy */
.section-nancy {
  background-color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Largeur maximale de la section */
  position: absolute; /* Position absolue pour placer en dessous du texte de bienvenue */
  top: 65%; /* Alignement en dessous du texte de bienvenue */
  left: 50%; /* Alignement centré */
  transform: translateX(-50%); /* Centrage horizontal */
  z-index: 1; /* Assure que la section est au-dessus de l'image de fond */
}

</style>
