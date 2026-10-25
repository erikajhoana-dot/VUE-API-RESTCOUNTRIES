<script setup>
defineProps({pais: Object});
</script>

<template>

    <div class="country_card">
        <img :src="pais.flag.url_png" :alt="'Bandera de ' + pais.names.common">
        <h2>{{ pais.names.common }}</h2>
        <p><strong>Capital: </strong>{{ pais.capitals?.[0]?.name || 'No disponible' }}</p>
        <p><strong>Región: </strong>{{ pais.region }}</p>
        <p><strong>Población: </strong>{{ pais.population }} habitantes</p>
    </div>

</template>

