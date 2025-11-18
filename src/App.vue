<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <ChatBotButton />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ChatBotButton from './components/ChatBotButton.vue'

export default {
  components: { Navbar, ChatBotButton }
}
</script>

<style>
:root {
  --primary: #4CAF50;
  --secondary: #F7A548;
  --chatbotback: #D85C4A;   
  --background: #121212b7;
  --text: #ffffff;
  --shadow: rgba(0,0,0,0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: var(--background);
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>