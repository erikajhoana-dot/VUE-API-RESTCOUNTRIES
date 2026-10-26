<script setup>

import { obtener_paises } from './services/countryService';
import { ref, onMounted, computed } from 'vue';
import CountryCard from './components/CountryCard.vue';

const paises = ref([]); 

const paisesFiltrados = computed(() => {
    return paises.value.filter(pais =>
        pais.names.common.toLowerCase().includes(busqueda.value.toLowerCase()) || pais.region.toLowerCase().includes(busqueda.value.toLowerCase())
    );
});

const busqueda = ref("")

const cargando = ref(true)

const errorCarga = ref("");

onMounted(async () => {
    try {
        paises.value = await obtener_paises();
    } catch (error) {
        errorCarga.value = "No fue posible cargar los países";
    } finally {
        cargando.value = false;
    }
});


</script>

<template>

  <header>

    <div id="columna-1">
      <h1>Explorador de paises</h1>
      <p>Conoce la información de algunos paises del mundo.<br/>Consulta banderas, capitales, regiones y población.<br/>Busca y filtra países en un solo lugar.</p>
    </div>

    <div id="columna-2">
      <img src="./assets/mundo.png">
    </div>

  </header>

  <main>

    <div id="barra-inputs">
      <input type="text" placeholder="Busca un país..." v-model="busqueda"/>
    </div>

    <p v-if="cargando" class="mensajes">Cargando paises...</p>

    <p v-else-if="errorCarga" class="mensajes error">{{ errorCarga }}</p>

    <div v-else-if="paisesFiltrados.length > 0" id="contenedor-paises">
      <CountryCard v-for="pais in paisesFiltrados" :pais="pais"></CountryCard>
    </div>

    <p v-else class="mensajes">No se encontraron países que coincidan con tu búsqueda.</p>

  </main>

</template>
