import { defineStore } from 'pinia';
import { Node, Edge } from '@vue-flow/core';

export const useNodeStore = defineStore('nodes', {
  state: () => ({
    nodes: [] as Node[],
    edges: [] as Edge[],
    selectedNodeId: null as string | null,
  }),
  getters: {
    selectedNode: (state) => state.nodes.find(node => node.id === state.selectedNodeId),
  },
  actions: {
    selectNode(nodeId: string) {
        this.selectedNodeId = nodeId;
      },
      setNodes(nodes: Node[]) {
        this.nodes = nodes;
      },
      setEdges(edges: Edge[]) {
        this.edges = edges;
      },
      updateNode(nodeId: string, updatedData: Partial<Node['data']>) {
        const nodeIndex = this.nodes.findIndex(node => node.id === nodeId);
        if (nodeIndex !== -1) {
          // Update the node's data property with the provided updatedData
          this.nodes[nodeIndex].data = { ...this.nodes[nodeIndex].data, ...updatedData };
        }
      },
      addNode(node: Node) {
        this.nodes.push(node);
      },
      removeNode(nodeId: string) {
        this.nodes = this.nodes.filter(node => node.id !== nodeId);
        this.edges = this.edges.filter(edge => edge.source !== nodeId && edge.target !== nodeId);
      },
      addEdge(edge: Edge) {
        this.edges.push(edge);
      },
      removeEdge(edgeId: string) {
        this.edges = this.edges.filter(edge => edge.id !== edgeId);
      },
      clearSelectedNode() {
        this.selectedNodeId = null;
      },
      initializeFlow({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
        this.nodes = nodes;
        this.edges = edges;
      },
  }
});
