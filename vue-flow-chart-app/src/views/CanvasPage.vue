<template>
    <v-container fluid>
        <v-row>
            <v-col cols="6">
                <VueFlow
                    v-model:nodes="nodes"
                    v-model:edges="edges"
                    fit-view-on-init
                    class="vue-flow-basic-example"
                    :default-zoom="1.5"
                    :min-zoom="0.2"
                    :max-zoom="4"
                    style="height: 80vh; width: 120vh;"
                    >
                    <Background pattern-color="#aaa" :gap="8" />

                    <MiniMap />

                    <Controls />

                    <template #node-custom="nodeProps">
                        <SpecialNode v-bind="nodeProps" />
                    </template>

                    <template #edge-custom="edgeProps">
                        <SpecialEdge v-bind="edgeProps" />
                    </template>
                </VueFlow>
            </v-col>
            <v-col cols="6">
                <NodeDetailDrawer/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="showNodeCreationDialog = true">Create New Node</v-btn>
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="showNodeCreationDialog" persistent>
        <v-card>
        <v-card-title>Create Node</v-card-title>
        <v-card-text>
            <v-text-field v-model="newNodeData.title" label="Title" />
            <v-text-field v-model="newNodeData.description" label="Description" />
            <v-select v-model="newNodeData.type" :items="nodeTypes" label="Type of Node" />
        </v-card-text>
        <v-card-actions>
            <v-btn text @click="showNodeCreationDialog = false">Cancel</v-btn>
            <v-btn text @click="createNode">Save</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { VueFlow, useVueFlow, type Node, type Edge } from '@vue-flow/core'
import SpecialNode from '../components/SpecialNode.vue'
import SpecialEdge from '../components/SpecialEdge.vue'
import NodeDetailDrawer from '../components/NodeDetailDrawer.vue'
import { useNodeStore } from '../stores/nodes';

const { onConnect, addEdges } = useVueFlow()

const nodes = ref<Node[]>([
  { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
  { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 } },
  { id: '3', type: 'custom', label: 'Node 3', position: { x: 400, y: 100 } },
])

const edges = ref<Edge[]>([
  { id: 'e1-2', source: '1', target: '2', type: 'custom' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
])

onConnect((params) => {
  addEdges([params])
})

const showNodeCreationDialog = ref(false);

interface NodeData {
  id: string;
  title: string;
  description: string;
  type: string; // or an enum if you have predefined node types
  position: { x: number; y: number }; // Optional, depending on whether you want to set positions here
}

const newNodeData = ref({

  title: '',
  description: '',
  type: 'default', // This can be an enum or string literal if you have predefined node types
} as NodeData);

/*
const nodeTypes = [
    {name: 'Send Message' ,value: 'sendMessage'}, 
    {name: 'Add Comment' ,value: 'addComment'}, 
    {name: 'Business Hours' ,value: 'businessHours'}
    
]; */

const nodeTypes = [
    'sendMessage', 
    'addComment', 
    'businessHours'
];

function createNode() {
  // Assuming `useNodeStore` has been correctly typed with `NodeData`
  useNodeStore().addNode({
    ...newNodeData.value,
    id: crypto.randomUUID(), // Using built-in crypto API for UUIDs
    position: { x: 0, y: 0 }, // Positioning logic goes here
  });

  showNodeCreationDialog.value = false;
  resetNewNodeData();
}

function resetNewNodeData() {
  newNodeData.value = {
    id: '',
    title: '',
    description: '',
    type: 'default',
    position: { x: 0, y: 0 },
  };
}

</script>


