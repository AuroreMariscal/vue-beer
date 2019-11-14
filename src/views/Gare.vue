<template>
  <section>
    <h1 class="title">Gare de {{ gare }}</h1>
    <div v-for="(train, index) in trains" :key="index">
      Train à destination de : {{ train.station }}</div>
  </section>
</template>

<script>
import beersService from "@/services/beersService";

export default {
  data() {
    return {
      id: this.$route.params.id,
      gare: {},
      trains: [],
    };
  },
  created() {
    beersService
      .getTrain(this.id)
      .then(response => {
        this.gare = response.data.station
        this.trains = response.data.departures.departure
      })
      .catch();
    if (localStorage.Station) {
      this.Station = JSON.parse(localStorage.Station);
    }
  },
};
</script>
