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
          <div class="who-are-we">
              <h1 class="title">ERROR 404</h1>
              <p>
              </p>
              <h1 class="title2">Ou est-ce que tu crois aller comme ca ?</h1>
    </div>
  </div>
  </div>
</div>
</template>

<style scoped>
.who-are-we {
  text-align: center;
  margin: 20px;
}

.title {
  font-size: 100px;
  font-family: "RenogareSoft-Regular", sans-serif;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 20px;
}

.title2 {
  font-size: 40px;
  font-family: "RenogareSoft-Regular", sans-serif;
  font-weight: bold;
  margin-top: 100px;
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
background-image: url('/src/assets/test.jpeg');
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