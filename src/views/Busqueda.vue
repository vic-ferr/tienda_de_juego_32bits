<template>
  <div class="container">
    <div class="m-3 row">
      <div class="col-6 my-5">
        <input
          type="text"
          placeholder="búsqueda por código"
          class="form-control"
          v-model="buscar"
        />
      </div>
      <p class="col-3 my-5">
        {{ titulosG }}
        Título de juegos:
        <span class="badge bg-secondary"></span>
      </p>
      <p class="col-3 my-5">
        {{ stockG }}
        juegos en stock:
        <span class="badge bg-secondary"></span>
      </p>
    </div>
<TablaDeJuegos :busqueda="buscar" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TablaDeJuegos from "../components/TablaDeJuegos.vue"
export default {
  name: "Busqueda",
  data() {
    return {
      buscar: "",
    };
  },

  computed: {
    ...mapGetters(["DatosFiltrados", "titulosG", "stockG"]),
    ...mapActions(["getData"]),
  },
  methods: {
  },
  created() {
    this.getData();
  },
  components: {
    TablaDeJuegos,
  },
};
</script>
