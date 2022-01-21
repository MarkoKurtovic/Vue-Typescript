<template>
  <div id="app">
    <Workers />
  </div>
</template>

<script>
import Workers from "./components/Workers.vue";

export default {
  name: "app",
  components: {
    Workers,
  },
};
</script>

<style>
#app {
  display: inline;
}
</style>