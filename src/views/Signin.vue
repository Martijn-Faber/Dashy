<template>
  <div class="tap-container">
    <div>
      <Input
        type="email"
        :placeholder="$t('placeholders.email')"
        class="email"
        v-on:input="email = $event"
        v-model="email"
        required
      />
      <Input
        type="password"
        :placeholder="$t('placeholders.password')"
        class="password"
        v-on:input="password = $event"
        v-model="password"
        required
      />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import Vue from "vue";

export default Vue.extend({
  name: "Signin",
  components: {
    Input,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    onSigninclick: async function () {
      this.isLoading = true;
      let Signin = await fetch(`/auth/login`, {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      });
      if (Signin.ok) {
        let json = await Signin.json();
        await localStorage.setItem("tapToken", json.accessToken);
        console.log(`stored TapToken in slocalStorage`);
        this.$router.push({ name: "Dashboard" });
        this.isLoading = false;
      } else {
        localStorage.removeItem("tapToken");
        //send error to user
      }
    },
  },
});
</script>

<style scoped>
.email {
  margin-bottom: 15px;
}
.password {
  margin-bottom: 15px;
}
</style>
