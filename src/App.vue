<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="d-flex  collapse navbar-collapse" id="navbarNav">
                <ul class=" navbar-nav ">
                  <li class="nav-item">
                    <router-link to="/Inicio" class="nav-link"
                      >Inicio</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/Busqueda" class="nav-link"
                      >Busqueda</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/Ventas" class="nav-link"
                      >Ventas</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/Total" class="nav-link"
                      >Totales</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
