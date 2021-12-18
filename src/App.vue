<template>
  <div>
    <div style="text-align: left">
      <img alt="Vue logo" src="./assets/logo.png" />
      <showDataVue></showDataVue>
      <setDataVue></setDataVue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import setDataVue from "./components/setData.vue";
import showDataVue from "./components/showData.vue";

export default defineComponent({
  components: {
    setDataVue,
    showDataVue,
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
