<script setup>

import { obtener_paises } from './services/countryService';
import { ref, onMounted } from 'vue';
import CountryCard from './components/CountryCard.vue';

const paises = ref([]); 

onMounted(async() => {
  paises.value = await obtener_paises();
}); 

</script>

<template>

  <header>

    <div id="columna-1">
      <h1>Explorador de paises</h1>
      <p>Conoce la información de todos los paises del mundo.<br />Busca, filtra y descrube sus datos más interesantes.</p>
    </div>

    <div id="columna-2">
      <img src="./assets/mundo.png">
    </div>

  </header>

  <main>

    <div id="barra-inputs">
      <input type="text" placeholder="Busca un país..." />
    </div>

    <div id="contenedor-paises">
      <CountryCard v-for="pais in paises" :pais="pais"></CountryCard>
    </div>

  </main>

</template>
