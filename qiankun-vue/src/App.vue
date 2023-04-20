<template>
  <div class="wrap">
    <nav>
      <router-link to="/">Vue2</router-link>
      <router-link to="/react">react</router-link>
    </nav>
    <main>
      <RouterView/>
      <div id="container"></div>
    </main>
  </div>
</template> 
<script>
// @ is an alias to /src
import {start} from 'qiankun'
export default {
  name: 'HomeView',
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrap {
  height: 100vh;
  display: flex;
}

nav {
  border: 1px solid #ccc;
  flex: 3;
  padding: 30px;
  display: flex;
  flex-direction: column;
}

button {
  width: auto;
}
main {
  flex: 7;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
