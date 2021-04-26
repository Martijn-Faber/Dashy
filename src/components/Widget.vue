<template>
  <div class="widget">
    <div class="widget-header" v-if="!isLoading">
      <div class="widget-header-information">
        <h2 class="widget-header-title">{{ title }}</h2>
        <p v-if="description" class="widget-header-desc">{{ description }}</p>
      </div>
      <!-- <div class="widget-header-hide" @click="blurWidget()">
        <i class="bi bi-eye-slash"></i>
      </div> -->
    </div>
    <slot></slot>
    <div v-if="isLoading" class="widget-loading">
      <i class="bi bi-cloud-download"></i>
      <p>We are getting your data...</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Widget",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    isLoading: {
      type: Boolean,
    },
  },
});
</script>

<style scoped lang="scss">
.blur {
  background-color: red;
}

.widget {
  max-width: 450px;
  width: 85vw;

  height: 350px;
  border-radius: 25px;
  background-color: rgb(26, 29, 40);
  padding: 25px;
  overflow-y: scroll;

  .widget-header {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;

    .widget-header-information {
      display: flex;
      align-items: center;
      width: 90%;

      .widget-header-title {
        margin: 0;
      }

      .widget-header-desc {
        margin-left: 5px;
        font-weight: 500;
      }
    }

    .widget-header-hide {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10%;
      cursor: pointer;
    }
  }
}

.widget-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .bi {
    font-size: 50px;
  }
}

.blur {
  filter: blur(4px);
}
</style>
