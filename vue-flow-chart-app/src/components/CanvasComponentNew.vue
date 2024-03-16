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
  
  onMounted(() => {
    // Optionally initialize or fetch nodes/edges if your store does that
    const nodes = nodesData.filter(item => !item.source && !item.target);
    const edges = nodesData.filter(item => item.source && item.target);

  nodeStore.initializeFlow({ nodes, edges });
  });
  
  // Reactive references to nodes and edges from the store for easy use in the template
  const nodes = ref(nodeStore.nodes);
  const edges = ref(nodeStore.edges);
  </script>
  
  <style scoped>
  @import '@vue-flow/core/dist/style.css';
  @import '@vue-flow/core/dist/theme-default.css';
  
  .flow-canvas {
    width: 100%;
    height: 80vh; /* Ensure the canvas has a specific height */
  }
  </style>
  