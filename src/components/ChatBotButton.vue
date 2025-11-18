<template>
  <button class="chatbot-btn">
    <img src="/public/ChatBot.svg">
  </button>
</template>

<script>

</script>

<style scoped>
.chatbot-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--chatbotback);
  border: none;
  box-shadow: 0 4px 12px var(--shadow);
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 999;
}

.chatbot-btn:hover {
  transform: scale(1.1);
}
</style>