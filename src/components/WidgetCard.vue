<template>
  <div>
    <router-link :to="to" class="card" v-if="to">
      <slot></slot>
    </router-link>
    <div class="card" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WidgetCard",
  props: {
    to: String,
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  background-color: rgb(19, 20, 27);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}
</style>
