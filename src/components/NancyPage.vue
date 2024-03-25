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
    <div class="background-image"></div>
    <div class="content-overlay">
      <h1 class="open">Voici la liste des bars validés par NousToutes54</h1>
      <div class="card-container">
        <a href="https://www.lesberthom.com/les-bars/nancy" class="card-link">
          <div class="card bert">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Les BerThoM<br> 5 rue Stanislas</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/schmilblickbar/" class="card-link">
          <div class="card schmil">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Le Schmilblick<br>62 Rue Saint-Georges</p>
            </div>
          </div>
        </a>
        <a href="https://lafeintedelours.fr/" class="card-link">
          <div class="card ours">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>La feinte de l'Ours<br>2 av du Général Leclerc</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/brasserieauteuil/?locale=fr_FR" class="card-link">
          <div class="card bam">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Le Bar A Mousse <br>76 Rue Saint-Georges</p>
            </div>
          </div>
        </a>
        <a href="https://courtcircuitnancy.fr/" class="card-link">
          <div class="card court">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Court Circuit<br>47 rue Voltaire</p>
            </div>
          </div>
        </a>
        <!-- Ajoutez plus de cartes ici -->
      </div>
      <h1 class="open">Voici la liste des bars validés par OPEN-BAR</h1>
      <div class="card-container">
        <a href="https://www.lafaille-nancy.fr/fr/index.html" class="card-link">
          <div class="card faille">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>La Faille<br> 11 Rue Dom Calmet</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/Cafedestrollsnancy/" class="card-link">
          <div class="card trolls">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Le Cafe Des Trolls<br>8 Rue Maurice Barrès</p>
            </div>
          </div>
        </a>
        <a href="https://brasserie-saint-georges-nancy.eatbu.com/?lang=fr" class="card-link">
          <div class="card geor">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>La Brasserie St-Georges<br>79 Rue Saint-Georges</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/p/Shamrock-Pub-Nancy-100057617735555/?locale=fr_FR" class="card-link">
          <div class="card sham">
            <div class="image-overlay"></div>
            <div class="card-text">
              <p>Le Shamrock <br>13 rue Saint Julien</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NancyPage'
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
  font-size: 20px;
  font-family: "RenogareSoft-Regular", sans-serif;
  white-space: nowrap;
}

.card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.card {
  position: relative;
  width: 300px;
  height: 200px;
  margin: 20px;
  border: 4px solid #ccc;
  border-radius: 25px;
  overflow: hidden;
  transition: transform 0.3s, border-color 0.3s;
  background-size: cover;
  background-position: center;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur du layer noir */
  backdrop-filter: blur(10px); /* Ajoute un effet de flou */
  z-index: 1; /* Assure que le layer est en dessous du texte */
}
.card p {
  position: relative;
  z-index: 2; /* Assure que le texte est au-dessus du layer */
  color: #fff; /* Couleur du texte */
}

.card p {
  margin: 10px;
}

.card:hover {
  transform: scale(1.05);
  border-color: violet;
}

.card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrage horizontal et vertical */
  text-align: center; /* Centrage du texte */
  z-index: 2; /* Assure que le texte est au-dessus du layer flou */
  white-space: nowrap;
}

.card-link {
  text-decoration: none;
}

/* Calque noir sur l'image */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0; /* Calque noir invisible par défaut */
  transition: opacity 0.3s; /* Transition de l'opacité */
}

.card:hover .image-overlay {
  opacity: 1; /* Afficher le calque noir au survol */
}

/* Images pour chaque carte */
.card.bam {
  background-image: url(' /src/assets/BAM.png');
}
.card.court {
  background-image: url(' /src/assets/Court.jpeg');
}
.card.bert {
  background-image: url(' /src/assets/les-berthom-nancy.jpg');
}
.card.ours {
  background-image: url(' /src/assets/Ours.jpg');
}
.card.schmil {
  background-image: url(' /src/assets/Shmil.jpeg');
}
.card.faille {
  background-image: url(' /src/assets/Faille.jpeg');
}
.card.trolls {
  background-image: url(' /src/assets/trolls.jpg');
}
.card.geor {
  background-image: url(' /src/assets/geor.jpg');
}
.card.sham {
  background-image: url(' /src/assets/sham.jpg');
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
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  z-index: 999;
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

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(' /src/assets/test.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.background-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
}

.content-overlay {
  position: relative;
  text-align: center;
  color: #fff;
  padding-top: 10%;
}

.content-overlay h1.open {
  font-size: 40px;
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

.section-nancy {
  background-color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
</style>
