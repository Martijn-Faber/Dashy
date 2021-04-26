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

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Medium.eot");
  src: local("./assets/fonts/Poppins Medium"), local("Poppins-Medium"),
    url("./assets/fonts/Poppins-Medium.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Poppins-Medium.woff2") format("woff2"),
    url("./assets/fonts/Poppins-Medium.woff") format("woff"),
    url("./assets/fonts/Poppins-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-SemiBold.eot");
  src: local("./assets/fonts/Poppins SemiBold"), local("Poppins-SemiBold"),
    url("./assets/fonts/Poppins-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/Poppins-SemiBold.woff2") format("woff2"),
    url("./assets/fonts/Poppins-SemiBold.woff") format("woff"),
    url("./assets/fonts/Poppins-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Regular.eot");
  src: local("./assets/fonts/Poppins Regular"), local("Poppins-Regular"),
    url("./assets/fonts/Poppins-Regular.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Poppins-Regular.woff2") format("woff2"),
    url("./assets/fonts/Poppins-Regular.woff") format("woff"),
    url("./assets/fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Bold.eot");
  src: local("./assets/fonts/Poppins Bold"), local("Poppins-Bold"),
    url("./assets/fonts/Poppins-Bold.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Poppins-Bold.woff2") format("woff2"),
    url("./assets/fonts/Poppins-Bold.woff") format("woff"),
    url("./assets/fonts/Poppins-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Black.eot");
  src: local("./assets/fonts/Poppins Black"), local("Poppins-Black"),
    url("./assets/fonts/Poppins-Black.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Poppins-Black.woff2") format("woff2"),
    url("./assets/fonts/Poppins-Black.woff") format("woff"),
    url("./assets/fonts/Poppins-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: rgb(19, 20, 27);
  font-family: "Poppins";
  font-weight: 600;
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
  padding: 2rem;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
    background: transparent;
  }
  overflow: -moz-scrollbars-none;
}

@media (max-width: 400px) {
  .view {
    width: 100vw;
  }
}

.bi {
  color: #fff;
  font-size: 22px;
}
</style>
