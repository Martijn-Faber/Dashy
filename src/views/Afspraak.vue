<template>
  <div>
    <div class="header">
      <div class="header-back-icon" @click="back()">
        <i class="bi bi-arrow-left-circle"></i>
      </div>
      <div>
        <h1>Afspraak.</h1>
      </div>
    </div>
    <Card>
      <div class="appointment">
        <div class="appointment-information">
          <div class="info-card">
            <div class="info-wrapper">
              <div class="info" v-if="appointment.start && appointment.end">
                <i class="bi bi-calendar2"></i>
                {{ formatDate(appointment.start) }} -
                {{ formatDate(appointment.end) }}
              </div>
              <div class="info" v-if="appointment.location">
                <i class="bi bi-geo-alt"></i>
                {{ appointment.location }}
              </div>
              <div
                class="info"
                v-if="appointment.teacher.name && appointment.teacher"
              >
                <i class="bi bi-person"></i>
                {{ appointment.teacher.name }} ({{
                  appointment.teacher.teachercode
                }})
              </div>
              <div class="info" v-if="appointment.subject.name">
                <i class="bi bi-book"></i>
                {{ appointment.subject.name }}
              </div>
            </div>
          </div>
          <div class="homework-card" v-if="appointment.body !== null">
            <div class="homework" v-html="appointment.body"></div>
          </div>
          <div class="homework-card no-homework" v-else>
            <i class="bi bi-book icon-big"></i>
            <h2>Geen huiswerk voor vandaag</h2>
          </div>
        </div>
        <div class="appointment-attachments" v-if="appointment.attachments">
          <div v-for="(item, index) in appointment.attachments" :key="item.id">
            <div
              @click="
                downloadAttachement(`https://eckart.magister.net${item.file}`)
              "
            >
              <WidgetCard>
                <div class="attachment">
                  <div class="attachment-icon">
                    <i :class="getFileIcon(index)"></i>
                  </div>
                  <div class="attachment-information">
                    <p>{{ item.name }}</p>
                    <span
                      >{{ formatDate(item.date) }} -
                      {{ Math.round(item.size / 1000) }}kb</span
                    >
                  </div>
                </div>
              </WidgetCard>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../components/BigCard.vue";
import WidgetCard from "../components/WidgetCard.vue";
import dayjs from "../dayjs";
import { serverUrl } from "../config";

export default Vue.extend({
  name: "Afspraak",
  components: {
    Card,
    WidgetCard,
  },
  data() {
    return {
      appointment: {},
    };
  },
  methods: {
    back() {
      this.$router.push("/vandaag");
      console.log("HAI");
    },
    downloadAttachement(url: string) {
      console.log("YELLOW");
      window.location.assign(url);
    },
    async getAppointment() {
      console.log(this.$route.params.id);
      const response = await fetch(
        `http://${serverUrl}:5000/api/appointments/${this.$route.params.id}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      this.appointment = json;
    },
    getFileIcon(index: number) {
      switch (this.appointment.attachments[index].type) {
        case "application/msword":
          return "bi bi-file-earmark-text";
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          return "bi bi-file-earmark-text";
        case "application/vnd.ms-excel":
          return "bi bi-file-earmark-spreadsheet";
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          return "bi bi-file-earmark-spreadsheet";
        case "application/vnd.ms-powerpoint":
          return "bi bi-file-earmark-slides";
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          return "bi bi-file-earmark-slides";
        default:
          return "bi bi-file-earmark";
      }
    },
    formatDate(date: any) {
      return dayjs(date).format("LLL");
    },
  },
  mounted() {
    this.getAppointment();
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  .header-back-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .bi {
      font-size: 25px;
    }
  }
}

.appointment {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .appointment-information {
    height: 90%;
    width: inherit;

    .info-card {
      background-color: #13141b;
      width: 100%;
      margin-bottom: 2rem;
      padding: 25px;
      border-radius: 25px;

      .info-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
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

        .info {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          i {
            margin-right: 10px;
          }
        }
      }
    }

    .homework-card {
      background-color: #13141b;
      width: 100%;
      margin-bottom: 2rem;
      padding: 25px;
      border-radius: 25px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      .homework {
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
    }

    .no-homework {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .bi {
        font-size: 50px;
      }
    }
  }

  .appointment-attachments {
    height: 10%;
    width: inherit;

    .attachment {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .attachment-icon {
      height: 100%;
      margin-right: 10px;
    }

    .attachment-information {
      text-decoration: none;
      color: #ffffff;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
}
</style>
