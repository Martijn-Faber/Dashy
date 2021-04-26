<template>
  <div>
    <Widget
      title="Huiswerk"
      :description="`voor morgen (${nextDay()})`"
      :isLoading="isLoading"
      v-if="appointments"
    >
      <div v-for="(item, index) in appointments" :key="index">
        <WidgetCard v-if="item.body">
          <div class="homework">
            <div class="homework-header">
              <div class="homework-corner">
                <div class="homework-circle">
                  <i class="bi bi-book"></i>
                </div>
              </div>
              <div class="homework-subject" v-if="item.subject.name">
                {{ item.subject.name }}
              </div>
              <!-- <div class="homework-corner" @click="doneHomework()">
                <div class="homework-circle">
                  <i class="bi bi-check"></i>
                </div>
              </div> -->
            </div>
            <div class="homework-item">
              <div class="homework-body" v-html="item.body"></div>
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
  name: "HomeworkWidget",
  components: {
    Widget,
    WidgetCard,
  },
  data() {
    return {
      appointments: [],
      isLoading: Boolean,
    };
  },
  methods: {
    nextDay() {
      return dayjs().add(1, "days").format("dddd");
    },
    async getAppointments() {
      this.isLoading = true;
      const tomorrow = dayjs().add(1, "days").format("YYYY-MM-DD");
      const response = await fetch(
        `http://${serverUrl}:5000/api/appointments?from=${tomorrow}&to=${tomorrow}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        this.isLoading = false;
        const json = await response.json();
        this.appointments = json;
      }
    },
    // doneHomework() {},
    isTeamsMeeting() {
      this.body.includes("<p>Teams meeting:</p>");
    },
  },
  mounted() {
    this.getAppointments();
  },
});
</script>

<style lang="scss" scoped>
.homework {
  width: 100%;
  display: flex;

  flex-direction: column;

  .homework-header {
    display: flex;
    align-items: center;

    .homework-corner {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;

      .homework-circle {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        background-color: #1a1d28;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
      }
    }

    .homework-subject {
      width: 60%;
    }
  }
}

.homework-item {
  padding-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  -webkit-mask-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    rgba(19, 20, 27, 1) 50%
  );
  mask-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    rgba(19, 20, 27, 1) 50%
  );
}
</style>
