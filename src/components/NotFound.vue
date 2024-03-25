<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <router-link to="/">Go back to home</router-link>
    </div>
</template>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

router-link {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2rem;
}

router-link:hover {
    text-decoration: underline;
}
</style>