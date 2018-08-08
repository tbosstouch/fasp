<template>
  <div id="app">
    <v-app>
      <Navbar />
      <main>
        <router-view/>
      </main>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Regular', 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
}
</style>
