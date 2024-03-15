<template>
    <v-card class="ma-5" outlined>
      <v-card-title>
        <v-icon left>mdi-node</v-icon>
        {{ node.title }}
      </v-card-title>
      <v-card-text>{{ truncatedDescription }}</v-card-text>
      <v-card-actions>
        <v-btn icon @click="editNode">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red" @click="deleteNode">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { VCard, VCardTitle, VCardText, VCardActions, VBtn, VIcon } from 'vuetify/components'
  import { computed, defineProps } from 'vue';
  
  interface Node {
    id: string;
    title: string;
    description: string;
    type: string; // Adjust according to your node types
  }
  
  const props = defineProps({
    node: {
      type: Object as () => Node,
      required: true,
    },
  });
  
  const truncatedDescription = computed(() => {
    return props.node.description.length > 100
      ? props.node.description.substring(0, 100) + '...'
      : props.node.description;
  });
  
  const editNode = () => {
    // Emit an edit event, you can pass the node id or the whole node object
    // The parent component should handle this event to show an edit form
    console.log('Edit node:', props.node.id);
  };
  
  const deleteNode = () => {
    // Emit a delete event, similar to edit, let the parent handle the logic
    console.log('Delete node:', props.node.id);
  };
  </script>
  
  <style scoped>
  </style>
  