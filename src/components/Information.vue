<template>
  <div class="information">
    <table class="information-list">
      <tr>
        <td>Plane number</td>
        <td>{{ information.plane }}</td>
      </tr>
      <tr>
        <td>Duration</td>
        <td>{{ formattedDate || information.duration }}</td>
      </tr>
      <tr>
        <td>Origin gate</td>
        <td>{{ information.from }}</td>
      </tr>
      <tr>
        <td>Destination gate</td>
        <td>{{ information.to }}</td>
      </tr>
    </table>
  </div>
  <br />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Information",
  props: ["information"],
  watch: {
    information: function (newValue, oldValue) {
      console.log("last console" + this.information);
    },
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.information.duration);
    },
  },
  methods: {
    formatDate(date: number) {
      if (!date) {
        return "";
      }
      console.log("consoling information: " + this.information.duration);
      let hours = Math.floor(date / 60);
      let minutes = date % 60;

      return `${hours}h ${minutes}m`;
    },
  },
});
</script>

<style scoped>
.information {
  display: inline-block;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-top: 3px solid black;
  width: 20%;
  margin-left: 10px;
  background-color: lightblue;
  vertical-align: top;
}

.information td,
.information th {
  border: 1px solid #ddd;
  padding: 8px;
}

.information-list {
  text-align: left;
  background-color: #f2f2f2;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border-top: 3px solid black;
  width: 100%;
}

.information-list tr:hover {
  background-color: #ddd;
}
</style>
