<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BigCard",
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  border-radius: 25px;
  padding: 25px;
  background-color: #1a1d28;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
    background: transparent;
  }
}
</style>
