<template>
  <div class="nav">
    <div class="nav-brand">Dashy</div>
    <div class="nav-items">
      <div class="nav-item">
        <router-link to="vandaag" class="nav-button">
          <i class="bi bi-house"></i>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="agenda" class="nav-button">
          <i class="bi bi-calendar2"></i>
        </router-link>
      </div>
    </div>
    <div class="nav-profile">
      <router-link to="help" class="nav-button">
        <i class="bi bi-question-circle"></i>
      </router-link>
      <router-link to="account" class="nav-button">
        <img src="../assets/index.jpg" alt="" class="profile-picture" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",
});
</script>

<style scoped lang="scss">
.nav {
  width: 5%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgb(26, 29, 40);
  padding: 30px 0;
  flex-direction: column;

  .nav-brand {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 5%;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 85%;

    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: inherit;
    }
  }

  .nav-button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #13141b;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    padding: 15px;
  }

  .nav-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10%;
    width: 100%;

    .profile-picture {
      width: inherit;
      height: inherit;
      border-radius: 100%;
      object-fit: cover;
    }
  }
}
</style>
