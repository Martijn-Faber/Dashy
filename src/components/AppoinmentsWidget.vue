<template>
  <div>
    <Widget
      v-if="appointments"
      title="Agenda"
      :description="`voor vandaag (${formatDate('dddd')})`"
      :isLoading="isLoading"
    >
      <div v-for="(item, index) in appointments" :key="index">
        <WidgetCard :to="`/afspraak/${item.id}`" v-if="!item.entireday">
          <div class="appointment-circle">
            {{ item.lessonhour }}
          </div>
          <div class="appointment-item">
            <div class="appointment-subject" v-if="item.subject.name">
              {{ item.subject.name }} - {{ item.location }}
            </div>
            <!-- if not a class -->
            <div class="appointment-subject" v-if="item.lessontype !== 13">
              {{ item.description }}
            </div>
            <div v-if="item.teacher">
              {{ item.teacher.teachercode }}
              {{ formatDate("LT", item.start) }} -
              {{ formatDate("LT", item.end) }}
            </div>
          </div>
          <div class="appointment-homework">
            <i :class="getStatusIcon(index)"></i>
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
  name: "AppoinmentsWidget",
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
    //OOIT OPLOSSEN

    getStatusIcon(index: number) {
      let icon = "";

      switch (this.appointments[index].type) {
        case 1:
          icon = "bi bi-file-earmark-text";
          break;
        case 2:
          icon = "bi bi-pen";
          break;
        case 3:
          icon = "bi bi-pen";
          break;
        case 4:
          icon = "bi bi-pen";
          break;
        case 5:
          icon = "bi bi-chat-text";
          break;
        case 6:
          icon = "bi bi-info-circle";
          break;
        default:
          icon = "";
          break;
      }

      if (this.appointments[index].done) {
        return `${icon}-fill`;
      }
      return icon;
    },
    formatDate(format: string, date?: any) {
      return dayjs(date).format(format);
    },
    async getAppointments() {
      this.isLoading = true;
      const nextday = dayjs().add(1, "days").format("YYYY-MM-DD");
      const today = dayjs().format("YYYY-MM-DD");
      const response = await fetch(
        `http://${serverUrl}:5000/api/appointments?from=${today}&to=${nextday}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        this.appointments = json;
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getAppointments();
  },
});
</script>

<style lang="scss" scoped>
.appointment-circle {
  height: 50px;
  width: 15%;
  border-radius: 100%;
  background-color: #1a1d28;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.appointment-item {
  width: 70%;
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

.appointment-homework {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .notdone {
    color: #fc5353;
  }
}
</style>
