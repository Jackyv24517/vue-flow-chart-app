<template>
    <div class="attachment-uploader">
      <v-list>
        <v-list-item
          v-for="attachment in attachments"
          :key="attachment.id"
          class="attachment-preview"
        >
          <v-list-item-content>
            <v-list-item-title>{{ attachment.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ attachment.size }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeAttachment(attachment.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <input type="file" @change="uploadAttachment" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const attachments = ref([]);
  
  const uploadAttachment = (event) => {
    const files = event.target.files;
    if (files) {
      // Handle file upload logic here
      // For example, add files to the attachments array or upload them to a server
    }
  };
  
  const removeAttachment = (attachmentId) => {
    // Remove attachment from the attachments array or server
  };
  </script>
  
  <style scoped>
  .attachment-uploader {
    /* Styles for your uploader */
  }
  
  .attachment-preview {
    /* Styles for your attachment previews */
  }
  </style>
  