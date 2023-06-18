<template>
  <div id="app">
    <nav>

        <div class="comics-logo">
          <img class="marvel-logo" src="./assets/marvellogo.png" alt="">
        </div>
        <div class="comic-nav">
          <router-link to="/">Home</router-link>
          <router-link :to="{name: 'favorites'}">Favorites <span class="badge">{{ favorites.length }}</span></router-link>
        </div>

    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',

  computed: {
    ...mapState({
      favorites: state => state.favorites
    })
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
  padding: 7px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #B31312;
}

.marvel-logo {
  width: 100px;
}

.badge {
  display: inline-block;
  margin: 4px;
  padding: 3px;
  width: 30px;
  border-radius: 7px;
  border: 1px solid #B31312;
  background-color: #2B2A4C;
  color: white;
}



</style>
