<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
if (process.env.NODE_ENV === 'production') {
  console.log('We are in production mode');
} else {
  console.log('We are in development mode');
}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input, button {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;

}
button {
  border: none;
  background-color: #007BFF;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}

input {
  border: 1px solid #007BFF;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>