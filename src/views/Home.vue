<template>
  <section>
    <div class="favorites">
      {{ favorites }}
    </div>
    <b-table :data="tableDataSimple">
      <template slot-scope="props">
        <b-table-column label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>

        <b-table-column label="Name">
          <router-link :to="{path:'/gare/' + props.row.id}">{{ props.row.name }}</router-link>
        </b-table-column>
        <b-table-column label="Website">
          <a :href="props.row.standardname">{{ props.row.standardname }}</a>
          <button class="button">Favorite</button>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import beersService from "@/services/beersService";

export default {
  created() {
    beersService
      .getBreweries()
      .then(response => {
        this.tableDataSimple = response.data.station;
      })
      .catch();
  },
  data() {
    return {
      test: {
        label: "ok",
        name: "oui"
      },
      tableDataSimple: [
        {
          id: 1,
          name: "Anheuser-Busch InBev",
          standardname: "http://www.anheuser-busch.com/"
        },
        {
          id: 2,
          name: "Anheuser-Busch InBev",
          standardname: "http://www.anheuser-busch.com/"
        }
      ],
      favorites: []
    };
  },
  methods: {
  }
};
</script>
