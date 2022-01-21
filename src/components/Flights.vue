<template>
  <div class="flights">
    <table id="flights-details">
      <tr>
        <th scope="col">Flight number</th>
        <th scope="col">Origin</th>
        <th scope="col">Origin date</th>
        <th scope="col">Destination</th>
        <th scope="col">Destination date</th>
      </tr>
      <tr
        v-for="(flights, index) in flights"
        :key="index"
        v-on:click="showInformation(flights)"
      >
        <td>{{ flights.num }}</td>
        <td>{{ flights.to }}</td>
        <td>{{ flights.from_date }}</td>
        <td>{{ flights.to }}</td>
        <td>{{ flights.to_date }}</td>
      </tr>
    </table>
  </div>
  <Information v-bind:information="information" v-bind:count="count" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlightsDataService from "@/services/FlightsDataService";
import Flight from "@/types/Flight";
import ResponseData from "@/types/ResponseData";
import Information from "./Information.vue";
export default defineComponent({
  name: "flights",
  components: {
    Information,
  },
  data() {
    return {
      flights: [] as Flight[],
      information: {},
    };
  },
  props: ["id"],
  methods: {
    retrieveWorkers(id: any) {
      FlightsDataService.get(id)
        .then((response: ResponseData) => {
          this.flights = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    showInformation(information: any) {
      this.information = information;
    },
  },
  watch: {
    id: function (newValue, oldValue) {
      this.retrieveWorkers(this.id);
    },
  },
  created: function () {
    const timer = setInterval(() => {
      this.retrieveWorkers(this.id);
    }, 10000);
    window.addEventListener("beforeunload", () => {
      clearInterval(timer);
    });
  },
});
</script>

<style scoped>
.flights {
  display: inline-block;
  margin-left: 10px;
  width: 60%;
}

#flights-details {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#flights-details td,
#flights-details th {
  border: 1px solid #ddd;
  padding: 8px;
}

#flights-details tr:hover {
  background-color: #ddd;
}

#flights-details th {
  padding-top: 20px;
  text-align: left;
  background-color: #f2f2f2;
  color: black;
}
</style>
