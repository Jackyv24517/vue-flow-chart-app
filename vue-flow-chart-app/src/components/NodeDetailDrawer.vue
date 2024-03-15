<template>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title>Title</v-list-item-title>
          <v-text-field v-model="nodeDetails.title" />
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Description</v-list-item-title>
          <v-text-field v-model="nodeDetails.description" />
        </v-list-item>
        <!-- Add more fields as needed based on the node's data -->
      </v-list>
      <v-btn color="primary" @click="saveDetails">Save</v-btn>
      <v-btn color="secondary" @click="closeDrawer">Cancel</v-btn>
    </v-navigation-drawer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useStore } from 'pinia';
  import { VNavigationDrawer, VList, VListItem, VListItemTitle, VTextField, VBtn } from 'vuetify/components';
    
  const store = useStore(); // Assuming you have a store for managing nodes

  
  
  // Data to hold the details of the selected node
  const nodeDetails = ref({
    id: '',
    title: '',
    description: '',
    // Include other properties as needed
  });
  
  const drawer = ref(false);
  
  // Example function to open the drawer and load node details
  function openDrawerWithNodeDetails(nodeId) {
    const node = store.findNodeById(nodeId); // Implement this method in your store
    if (node) {
      nodeDetails.value = { ...node };
      drawer.value = true;
    }
  }
  
  // Save the edited details
  function saveDetails() {
    store.updateNode(nodeDetails.value); // Implement this method in your store
    drawer.value = false;
  }
  
  // Close the drawer without saving
  function closeDrawer() {
    drawer.value = false;
  }
  </script>
  