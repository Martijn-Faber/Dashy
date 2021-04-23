<template>
  <div id="app" class="app">
    <Navbar />
    <router-view class="view" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import "./scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: rgb(19, 20, 27);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.view {
  height: 100vh;
  width: 95%;
  padding: 30px;
}

.bi {
  color: #fff;
  font-size: 22px;
}
</style>
