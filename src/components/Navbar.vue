<template>
  <nav class="navbar">
    <div class="logo-container">
    <img src="/public/logo.svg" class="logo-img">
    <div class="logo">ЖивДвор</div> 
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/products">Товары</router-link></li>
      <li><router-link to="/contacts">Контакты</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #121212;
  box-shadow: 0 2px 8px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px; 
}

.logo-img {
  align-items: left;
  height: 100px;        
  width: auto;         
  object-fit: contain; 
}

.logo {
  font-family: Segoe Script;
  align-items: left;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  font-weight: 500;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-links a:hover {
  background: var(--primary);
  color: white;
}
</style>