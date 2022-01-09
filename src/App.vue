<template>
  <AirportCards :airports="usAirports" />
  <AirportCards :airports="euAirports" />
  <div class="wrapper">
    <card>
      <p>US Airports</p>
      <p>Total: {{ usAirports.length }}</p>
    </card>
  </div>
  <div class="wrapper">
    <card>
      <p>EU Airports</p>
      <p>Total: {{ euAirports.length }}</p>
    </card>
  </div>
</template>

<script>
import { ref } from 'vue'
import AirportCards from '@/components/AirportCards.vue'
import Card from '@/components/Card.vue'
import usAirportData from '@/data/us-airports.js'
import euAirportData from '@/data/eu-airports.js'

export default {
  name: 'App',
  components: { AirportCards, Card },
  setup() {
    const usAirports = ref(usAirportData);
    const euAirports = ref(euAirportData);
    
    return { usAirports, euAirports };
  }
}
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>