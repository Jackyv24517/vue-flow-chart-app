<template>
    <v-container>
      <h1>Flow Chart Application</h1>
      <CanvasComponent />
      <NodeDetailDrawer />
    </v-container>
  </template>
  
  <script setup lang="ts">
  import CanvasComponent from '@/components/CanvasComponent.vue';
  import NodeDetailDrawer from '@/components/NodeDetailDrawer.vue';
  </script>
  
  <style scoped>
  /* Add page-specific styles here */
  </style>
  