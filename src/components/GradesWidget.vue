<template>
  <div>
    <Widget v-if="grades" title="Cijfers" :isLoading="isLoading">
      <WidgetCard v-if="averageGrade">
        <div>
          <p>Je staat gemiddeld een {{ averageGrade }}</p>
        </div>
      </WidgetCard>
      <div v-for="(item, index) in grades" :key="index">
        <WidgetCard v-if="item.counts">
          <div class="grade-circle red" v-if="grade < 5.5">
            {{ item.grade }}
          </div>
          <div class="grade-circle">
            {{ item.grade }}
          </div>
          <div class="grade-item">
            <div class="grade-subject" v-if="item.subject">
              {{ item.subject.name }}
            </div>
            <div class="grade-entrydate">
              {{ formatDate(item.entrydate) }} - {{ item.description }}
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

export default Vue.extend({
  name: "GradesWidget",
  components: {
    Widget,
    WidgetCard,
  },
  data() {
    return {
      grades: [],
      averageGrade: "",
      isLoading: Boolean,
    };
  },
  methods: {
    formatDate(date: any) {
      return dayjs(date).format("LL");
    },
    getAverageGrade() {
      let sum = 0;
      let weights = 0;

      for (let i = 0; i < this.grades.length; i++) {
        const grade = this.grades[i].grade;
        const weightfactor = this.grades[i].weightfactor;

        if (!isNaN(grade)) {
          sum = sum + grade * weightfactor;
          weights = weights + weightfactor;
        }
      }

      if (weights > 0) {
        this.averageGrade = Math.round((sum / weights) * 100) / 100;
      }
    },
    async getGrades() {
      this.isLoading = true;
      const response = await fetch(`http://192.168.0.141:5000/api/grades`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const json = await response.json();
        this.grades = json;
        this.getAverageGrade();
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getGrades();
  },
});
</script>

<style lang="scss" scoped>
.grade-circle {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: #1a1d28;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  .red {
    color: red;
  }
}

.grade-item {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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

.grade-homework {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .notdone {
    color: #fc5353;
  }
}
</style>
