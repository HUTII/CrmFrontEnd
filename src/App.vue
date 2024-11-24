<template>
  <v-app>
    <div>
      <AppBar />
      <v-main>
        <RouterView />
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import AppBar from './components/AppBar.vue';

</script>

<style lang="scss">
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(@/assets/home_backgroud.jpg);
  background-size: cover;
}
</style>