<template>
    <g class="special-edge">
      <!-- Render the base edge path -->
      <path
        :d="path.value"
        fill="none"
        stroke="black"
        stroke-width="2"
      />
      <!-- Custom edge label with a delete button -->
      <foreignObject
        :x="labelPosition.x"
        :y="labelPosition.y"
        width="100"
        height="50"
      >
        <div xmlns="http://www.w3.org/1999/xhtml" class="edge-label">
          <button @click="removeEdge">×</button>
        </div>
      </foreignObject>
    </g>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import type { EdgeProps } from '@vue-flow/core';
  import { getBezierPath, useVueFlow } from '@vue-flow/core';
  
  const props = defineProps<EdgeProps>();
  const { removeEdges } = useVueFlow();
  
  // Calculate the Bezier path for the edge
  const path = computed(() => getBezierPath(props));
  
  // Placeholder for label position calculation
  // Adjust this logic based on your edge's path or specific requirements
  const labelPosition = computed(() => {
    const midPoint = path.value ? path.value[1] : { x: 0, y: 0 };
    return { x: midPoint.x - 50, y: midPoint.y - 25 }; // Adjust as needed
  });
  
  const removeEdge = () => {
    removeEdges([props.id]);
  };
  </script>
  
  <style scoped>
  .special-edge .edge-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: all;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  
  .special-edge .edge-label button {
    border: none;
    background-color: red;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  
  .special-edge .edge-label button:hover {
    background-color: darkred;
  }
  </style>
  