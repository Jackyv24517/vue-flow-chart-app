<template>
    <div class="custom-node">
      <!-- Connection points for the node -->
      <Handle type="target" position="Position.Top" />
      <Handle type="source" position="Position.Bottom" />
      
      <!-- Node content -->
      <div>{{ props.label }}</div>
      
      <!-- Buttons for node actions -->
      <button @click="onEdit">Edit</button>
      <button @click="onDelete">Delete</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Handle, Position } from '@vue-flow/core';
  import { defineProps, defineEmits } from 'vue';
  
  // Define the props the node will accept
  const props = defineProps<{
    id: string;
    label: string;
    // You can add other props as necessary
  }>();
  
  const emits = defineEmits(['editNode', 'deleteNode']);
  
  // Method to emit an event to edit the node
  const onEdit = () => {
    emits('editNode', props.id);
  };
  
  // Method to emit an event to delete the node
  const onDelete = () => {
    emits('deleteNode', props.id);
  };
  </script>
  
  <style scoped>
  .custom-node {
    width: 200px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  </style>
  