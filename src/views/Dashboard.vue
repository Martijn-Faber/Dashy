<template>
  <div>
    <h1 class="greeting" v-if="account.firstname">
      {{ Greeting }} {{ account.firstname }}.
    </h1>
    <div class="widgets">
      <AppoinmentsWidget></AppoinmentsWidget>
      <GradesWidget></GradesWidget>
      <AssignmentWidget></AssignmentWidget>
      <HomeworkWidget></HomeworkWidget>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppoinmentsWidget from "../components/AppoinmentsWidget.vue";
import GradesWidget from "../components/GradesWidget.vue";
import AssignmentWidget from "../components/AssignmentWidget.vue";
import HomeworkWidget from "../components/HomeworkWidget.vue";
import dayjs from "../dayjs";
import { serverUrl } from "../config";

export default Vue.extend({
  name: "Home",
  components: {
    AppoinmentsWidget,
    GradesWidget,
    AssignmentWidget,
    HomeworkWidget,
  },
  data() {
    return {
      account: {},
    };
  },
  computed: {
    Greeting() {
      const hour: number = parseInt(dayjs().format("HH"));

      if (hour < 12) {
        return "Goedenmorgen";
      } else if (hour < 18) {
        return "Goedenmiddag";
      }
      return "Goedenavond";
    },
  },
  methods: {
    async getAccount() {
      const response = await fetch(`http://${serverUrl}:5000/api/account`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        this.account = json;
      }
    },
  },
  mounted() {
    this.getAccount();
  },
});
</script>

<style lang="scss" scoped>
.widgets {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.greeting {
  margin-bottom: 10px;
}
</style>
