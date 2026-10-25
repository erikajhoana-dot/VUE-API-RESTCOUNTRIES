<script setup>

import { obtener_paises } from './services/countryService';
import { ref, onMounted } from 'vue';

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
      <ul>
        <li v-for="pais in paises">
          <img :src="pais.flag.url_png" :alt="'Bandera de ' + pais.names.common"/>
          <h2>{{ pais.names.common }}</h2>
          <p>Capital: {{ pais.capitals?.[0]?.name || 'No disponible' }}</p>
          <p>Region: {{ pais.region }}</p>
          <p>Población: {{ pais.population }} habitantes</p>
        </li>
      </ul>
    </div>
  </main>
</template>
