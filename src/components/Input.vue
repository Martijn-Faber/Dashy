<template>
  <div>
    <div v-if="blur">
      <input
        class="input"
        v-model="inputValue"
        :type="`${type}`"
        @blur="blur"
        @:input="$emit('input', $event.target.value)"
        :placeholder="`${placeholder}`"
      />
    </div>
    <div v-if="!blur">
      <input
        class="input"
        v-model="inputValue"
        :type="`${type}`"
        v-on:input="$emit('input', $event.target.value)"
        :placeholder="`${placeholder}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: String,
    type: String,
    blur: Function,
    value: String,
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
};
</script>

<style scoped>
.input {
  box-sizing: border-box;
  min-width: 150px;
  width: 80vw;
  max-width: 350px;
  padding: 8px 20px;
  margin: 0;
  height: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  border: none;
  border-radius: 100px;
  background-color: var(--clr-secundair);
  color: var(--txt-primair);
  transition: all 0.2s ease-in-out;
}

.input:active {
  opacity: 0.8;
}

.input:focus {
  outline: none;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--clr-plh);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--clr-plh);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--clr-plh);
}
</style>
