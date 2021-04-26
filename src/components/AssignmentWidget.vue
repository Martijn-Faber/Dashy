<template>
  <div>
    <Widget title="Opdrachten" :isLoading="isLoading">
      <div v-for="(item, index) in assignments" :key="index">
        <WidgetCard v-if="item.finished === false">
          <div class="assignment-circle">
            {{ item.subject }}
          </div>
          <div class="assignment-item">
            <div>
              {{ item.name }}
            </div>
            <div>
              {{ formatDate(item.deadline, "LL - HH:mm") }}
            </div>
          </div>
        </WidgetCard>
      </div>
    </Widget>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Widget from "./Widget.vue";
import WidgetCard from "./WidgetCard.vue";
import dayjs from "../dayjs";
import { serverUrl } from "../config";

export default Vue.extend({
  name: "AssignmentWidget",
  data() {
    return {
      assignments: [],
      isLoading: Boolean,
    };
  },
  components: {
    Widget,
    WidgetCard,
  },
  methods: {
    formatDate(date: any, format: string) {
      console.log();
      return dayjs(date).format(format);
    },
    async getAssinments() {
      this.isLoading = true;

      const response = await fetch(`http://${serverUrl}:5000/api/assignments`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const json = await response.json();
        this.assignments = json;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getAssinments();
  },
});
</script>

<style lang="scss" scoped>
.assignment-circle {
  height: 50px;
  width: 15%;
  border-radius: 100%;
  background-color: #1a1d28;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.assignment-item {
  width: 85%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;

  -webkit-mask-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(19, 20, 27, 1) 50%
  );
  mask-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(19, 20, 27, 1) 50%
  );
}
</style>
