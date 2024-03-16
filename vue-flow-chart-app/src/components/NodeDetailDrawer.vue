<template>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-container>
        <v-form>
          <!-- Node Title and Description -->
          <v-text-field v-model="nodeDetails.title" label="Title" />
          <v-text-field v-model="nodeDetails.description" label="Description" />
  
          <!-- Send Message: Attachment upload and display -->
          <div v-if="nodeDetails.type === 'sendMessage'">
            <AttachmentUploader v-model="nodeDetails.attachments" />
          </div>
  
          <!-- Add Comments: Text input for comments -->
          <div v-if="nodeDetails.type === 'addComment'">
            <v-textarea v-model="nodeDetails.comments" label="Comments" />
          </div>
  
          <!-- Business Hours: Date-time picker for business hours -->
          <div v-if="nodeDetails.type === 'businessHours'">
            <BusinessHoursPicker v-model="nodeDetails.businessHours" />
          </div>
  
          <!-- Actions: Save, Delete, and Close -->
          <v-btn @click="saveChanges">Save</v-btn>
          <v-btn color="error">Delete</v-btn>
          <v-btn @click="closeDrawer">Close</v-btn>
        </v-form>
      </v-container>
    </v-navigation-drawer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useNodeStore } from '../stores/nodes'; // Your store path
  import AttachmentUploader from '../components/AttachmentUploader.vue';
  import BusinessHoursPicker from '../components/BusinessHoursPicker.vue';
  
  // Replace 'NodeDetailType' with the appropriate type based on your application's data structure
 interface NodeDetailType {
    id: string;
    title: string;
    description: string;
    type: string;
    attachments?: any[];
    comments?: string;
    businessHours?: any; // Structure this according to your date-time picker's output
  }
  
  const nodeStore = useNodeStore();
  const drawer = ref(false);
  const nodeDetails = ref<NodeDetailType>({
    id: '',
    title: '',
    description: '',
    type: '',
    // Add default values for other properties as needed
  });
  
  // Function to open the drawer with node details
  function openDrawer(nodeId: string) {
    // Fetch the node details from your store or API
    const node = nodeStore.nodes.find((n) => n.id === nodeId);
    if (node) {
      nodeDetails.value = { ...node.data, id: node.id };
      drawer.value = true;
    }
  }
  // Function to save changes made to the node details
  function saveChanges() {
    // Update the node in your store
    nodeStore.updateNode(nodeDetails.value);
    drawer.value = false;
  }
  
  // Function to delete the node
  /*
  function deleteNode() {
    nodeStore.deleteNode(nodeDetails.value.id);
    drawer.value = false;
  }*/
  
  // Function to close the drawer
  function closeDrawer() {
    drawer.value = false;
  }
  </script>