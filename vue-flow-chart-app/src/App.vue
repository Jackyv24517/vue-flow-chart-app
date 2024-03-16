<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vue Flow Chart Apps</v-toolbar-title>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/flow-chart">Flow Chart</v-btn>
    </v-app-bar>
    <v-main>
        <router-view></router-view>    
    </v-main>

    <v-footer app>
      Mini vue flow chart apps @ 2024
    </v-footer>
  </v-app>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
