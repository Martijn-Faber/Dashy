<template>
  <div>
    <h1>Goedenmorgen {{ name }}.</h1>
    <Widget></Widget>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Widget from "../components/Widget.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Widget,
  },
  data() {
    return {
      name: "Martijn",
    };
  },
});
</script>
