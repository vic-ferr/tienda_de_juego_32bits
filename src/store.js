import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    almacen: [],
  },
  getters: {
    DatosFiltrados(state) {
      return (b) => state.almacen.filter((a) => a.codigo.includes(b));
    },

    stockG(state) {
      return state.almacen.map((e) => e.stock).reduce((e, b) => e + b);
    },
    titulosG(state) {
      return state.almacen.length;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.almacen = payload;
      console.log("SET_DATA", payload);
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const response = await axios("data.json");
        console.log(response.data);
        commit("SET_DATA", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
