<template>
    <VueFlow :nodes="nodes" :edges="edges">
      <template v-slot:node-special="{ node }">
        <SpecialNode 
          :id="node.id" 
          :label="node.data.label" 
          @nodeClicked="openNodeDetailDrawer(node.id)" 
        />
      </template>
  
      <template #edge-special="{ edge }">
        <SpecialEdge :edge="edge" />
      </template>
    </VueFlow>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { VueFlow } from '@vue-flow/core';
  import SpecialNode from '../components/SpecialNode.vue';
  import SpecialEdge from '../components/SpecialEdge.vue';
  import { useNodeStore } from '../stores/nodes';
  import nodesData from '../assets/nodes.json';
  
  const nodeStore = useNodeStore();
  
  // Node Detail Drawer state
  const isNodeDetailDrawerVisible = ref(false);
  const editingNodeId = ref('');
  
  // Function to open Node Detail Drawer
  const openNodeDetailDrawer = (nodeId: string) => {
    editingNodeId.value = nodeId;
    isNodeDetailDrawerVisible.value = true;
  };
  
  onMounted(async () => {
  // Example fetching nodes and edges (replace with your actual fetch logic)
  // This could be a call to nodeStore actions that fetch data, or directly fetching here and then updating the store.
  const fetchedNodes = await fetchNodes();
  const fetchedEdges = await fetchEdges();

  // Assuming your store has methods to set nodes and edges
  nodeStore.setNodes(fetchedNodes);
  nodeStore.setEdges(fetchedEdges);
});

// Mock fetch functions (replace with actual fetch logic or store actions)
async function fetchNodes() {
  // Fetch nodes from an API or other data source
  return [
    // Example nodes
    { id: '1', type: 'input', position: { x: 250, y: 5 }, data: { label: 'Node 1' } },
    // Add more nodes as needed
  ];
}

async function fetchEdges() {
  // Fetch edges from an API or other data source
  return [
    // Example edges
    { id: 'e1-2', source: '1', target: '2', animated: true },
    // Add more edges as needed
  ];
}
  </script>
  
  <style scoped>
  @import '@vue-flow/core/dist/style.css';
  @import '@vue-flow/core/dist/theme-default.css';
  
  .flow-canvas {
    width: 100%;
    height: 80vh; /* Ensure the canvas has a specific height */
  }
  </style>
  