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
      <v-btn color="primary" @click="saveNodeDetails">Save</v-btn>
      <v-btn color="secondary" @click="closeDrawer">Cancel</v-btn>
    </v-navigation-drawer>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useNodeStore } from '../stores/nodes';
  import { VNavigationDrawer, VList, VListItem, VListItemTitle, VTextField, VBtn } from 'vuetify/components';
  
  // Data to hold the details of the selected node
  const nodeDetails = ref({
    id: '',
    title: '',
    description: '',
    // Include other properties as needed
  });
  
  const drawer = ref(false);

  const nodeStore = useNodeStore(); // Assuming you have a store for managing nodes
  
  // Watch for changes in selectedNodeId to update nodeDetails



  // Example function to open the drawer and load node details
  /*
  function openDrawerWithNodeDetails(nodeId) {
    const node = store.findNodeById(nodeId); // Implement this method in your store
    if (node) {
      nodeDetails.value = { ...node };
      drawer.value = true;
    }
  }*/

// Watch for changes in selectedNodeId to update nodeDetails
watch(() => nodeStore.selectedNodeId, (newId) => {
  if (newId) {
    const node = nodeStore.nodes.find((n) => n.id === newId);
    if (node) {
      nodeDetails.value = { ...node.data }; // Assuming node.data contains details
      drawer.value = true; // Open the drawer
    }
  } else {
    drawer.value = false; // Close the drawer if no node is selected
  }
});
  
const saveNodeDetails = async () => {
  // Perform any validation necessary for nodeDetails
  if (!nodeDetails.value.title || !nodeDetails.value.description) {
    // Handle validation failure (e.g., show an error message)
    console.error('Validation failed: title and description are required.');
    return;
  }

  try {
    // Call an action from your Pinia store to save the node details
    await nodeStore.updateNode(nodeDetails.value);

    // Close the drawer and clear the selected node after saving
    drawer.value = false;
    nodeStore.clearSelectedNode();

  } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error('Failed to save node details:', error);
  }
};

const closeDrawer = () => {
  drawer.value = false; // Close the drawer
  nodeStore.clearSelectedNode(); // Optionally clear the selected node in your store
};

</script>
  