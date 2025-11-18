<template>
    <title>Продукция</title>
  <div class="page products">
    <h2>Наша продукция</h2>
    <div class="products-grid">
      <div class="product-card">
        <div class="meat">
          <div class="product-img">🥩</div>
          <h3>Свежее мясо</h3>
          <p class="description">Высший сорт, без антибиотиков, от местных ферм.</p>
        </div>
      </div>
      <div class="product-card">
        <div class="milk">
          <div class="product-img">🥛</div>
          <h3 class="mh3">Кисломолочные продукты</h3>
          <p class="mh3">Ряженка, йогурт, кефир — 100% натуральные.</p>
        </div>
      </div>
      <div class="product-card">
        <div class="cheese">
          <div class="product-img">🧀</div>
          <h3>Сыры ручной работы</h3>
          <p class="description">Твёрдые и мягкие сыры из коровьего и козьего молока.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description{
  color: var(--text) !important;
}
.meat {
background-color: var(--chatbotback);
border-radius: 12px;
padding: 1.5rem;
}

.milk{
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
}

.cheese{
  background-color:var(--secondary);
  border-radius: 12px;
  padding: 1.5rem;
}
.products h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary);
}

.products-grid {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.product-card {
  
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--shadow);
  text-align: center;
}

.product-img {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  margin-bottom: 0.8rem;
  color: var(--text);
}

.mh3{
  color: black !important;
}

.product-card p {
  color: #666;
  line-height: 1.5;
}
</style>