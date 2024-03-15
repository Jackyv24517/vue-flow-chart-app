import { defineStore } from 'pinia';

interface NodeData {
  id: string;
  name?: string;
  type: string;
  data: any; // Adjust this to match your actual node data structure
}

export const useNodeStore = defineStore('nodes', {
  state: () => ({
    nodes: [] as NodeData[],
    selectedNodeId: null as string | null,
  }),
  getters: {
    selectedNode: (state) => state.nodes.find(node => node.id === state.selectedNodeId),
  },
  actions: {
    selectNode(nodeId: string) {
      this.selectedNodeId = nodeId;
    },
    updateNode(updatedNode: NodeData) {
      const index = this.nodes.findIndex(node => node.id === updatedNode.id);
      if (index !== -1) {
        this.nodes[index] = updatedNode;
      }
    },
    // Add more actions as needed
  }
});
