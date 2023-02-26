<template>
  
  <router-view />

</template>
<script>

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffdfd;
}
nav {
  padding: 30px;
}
.card-text {
  font-size: 1.2rem;
  color: #0f0505;
}
.card-title {
  font-size: 1.5rem;
  color: #fffdfd;
}
nav a {
  font-weight: bold;
  color: #0f0505;
}
nav a.router-link-exact-active {
  color: #fffdfd;
}
</style>