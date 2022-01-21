<template>
  <div class="workers">
    <h4 class="title">Workers</h4>
    <table class="workers-list">
      <tbody
        v-for="(workers, index) in workers"
        :key="index"
        v-on:click="showFlights(workers.id)"
      >
        <tr>
          <th scope="col">{{ workers.name }}</th>
        </tr>
      </tbody>
    </table>
  </div>
  <Flights v-bind:id="id" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkersDataService from "@/services/WorkersDataService";
import Worker from "@/types/Worker";
import ResponseData from "@/types/ResponseData";
import Flights from "./Flights.vue";

export default defineComponent({
  name: "Workers",
  components: {
    Flights,
  },
  data() {
    return {
      workers: [] as Worker[],
      id: [],
    };
  },
  methods: {
    retrieveWorkers() {
      WorkersDataService.getAll()
        .then((response: ResponseData) => {
          this.workers = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    showFlights(id: any) {
      this.id = id;
      console.log("id from worker" + id);
    },
  },
  mounted() {
    this.retrieveWorkers();
  },
});
</script>

<style scoped>
.workers {
  display: inline-block;
  float: left;
  border-left: 3px solid black;
  border-right: 3px solid black;
  border-top: 3px solid black;
  width: 15%;
  background-color: lightblue;
}

.title {
  padding: 5px;
  text-align: center;
}

.workers-list {
  text-align: center;
  background-color: #f2f2f2;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border-top: 3px solid black;
  width: 100%;
}

.workers-list tr:hover {
  background-color: #ddd;
}
</style>
