<template>
    <div class="flow-canvas">
      <VueFlow :nodes="nodes" :edges="edges" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { VueFlow, useVueFlow } from '@braks/vue-flow';
  import nodesData from '../assets/nodes.json';
  import { useNodeStore } from '../stores/nodes';

interface NodeData {
    id: string;
    type?: string; // Optional, for custom node types
    position: { x: number; y: number, z: number };
     data: { label: string; [key: string]: any }; // 'data' can contain any additional properties
}

interface EdgeData {
    id: string;
  source: string;
  target: string;
  label?: string; // Optional, for labeling the edge
  // Vue Flow supports additional properties for styling and behavior customization
  [key: string]: any;
}

interface TransformedData {
  transformedNodes: NodeData[];
  transformedEdges: EdgeData[];
}

  // Reference for nodes and edges
  const { nodes, edges, getSelectedNodes } = useVueFlow();
  const nodeStore = useNodeStore();
  
  watch(getSelectedNodes, (selectedNodes) => {
    if (selectedNodes.length > 0) {
        const selectedNode = selectedNodes[0];
        nodeStore.selectNode(selectedNode.id);
    }
    });

  
  // Function to transform your JSON data to Vue Flow compatible nodes and edges
  function transformDataToVueFlowNodesAndEdges(data) {
    const transformedNodes: NodeData[] = [];
    const transformedEdges: EdgeData[] = [];
  
    data.forEach(node => {
      // Transform nodes here based on your data structure
      transformedNodes.push({
        id: node.id.toString(),
        position: { x: Math.random() * 200, y: Math.random() * 200 }, // Example positioning, you might want to position them based on your logic
        data: { label: node.name || `Node ${node.id}` },
        type: node.type,
      });
  
      // Assuming parentid/parentId is how edges are defined
      if (node.parentId || node.parentid) {
        transformedEdges.push({
          id: `e${node.id}-${node.parentId || node.parentid}`,
          source: node.parentId || node.parentid.toString(),
          target: node.id.toString(),
          // You can add more properties to customize the appearance of the edges
        });
      }
    });
  
    return { transformedNodes, transformedEdges };
  }
  
  onMounted(() => {
    const { transformedNodes, transformedEdges } = transformDataToVueFlowNodesAndEdges(nodesData);
    nodes.value = transformedNodes;
    edges.value = transformedEdges;
  });
  </script>
  
  <style scoped>
  .flow-canvas {
    width: 100%;
    height: 80vh;
  }
  </style>
  