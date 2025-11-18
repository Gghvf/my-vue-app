<template>
    <title>Главная</title>
  <div class="page home">
    <div class="hero">
      <h1>Натуральные продукты из сердца природы</h1>
      <p class="text">Мясо, кисломолочная продукция и сыры — свежие, экологичные, вкусные.</p>
      <router-link to="/products" class="btn">Смотреть товары</router-link>
    </div>
    <div class="mascot-placeholder">
      Наш маскот
      <img src="/public/mascot.svg">
     
    </div>
  </div>
</template>

<style scoped>

.text {
color: var(--text) !important;
}

.page {
  padding: 2rem;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--primary);
  color: white;
  border-radius: 30px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #388E3C;
}

.mascot-placeholder {
  text-align: center;
  font-size: 4rem;
  color: var(--secondary);
}
</style>