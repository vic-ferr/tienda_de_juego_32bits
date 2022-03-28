<template>
   <table class="table my-5">
  <thead>
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Stock</th>
      <th scope="col">Precio</th>
      <th scope="col">Color</th>
      <th scope="col">Destacado</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(dato,i) in DatosFiltrados(busqueda)" :key="i"
    :style="{'background-color':dato.color}">
      <th scope="row">{{dato.codigo}}</th>
      <td>{{dato.nombre}}</td>
      <td>{{dato.stock}}</td>
      <td>{{dato.precio}}</td>
      <td>{{dato.color}}</td>
      <td>{{dato.destacado}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
    name:"TablaDeJuegos",
    props: {
        busqueda: {
            type: String,
            default: () => ""
        },
    },
    computed: {

        ...mapState(["almacen"]),
        ...mapGetters(["DatosFiltrados"]),
    },
    };
</script>

