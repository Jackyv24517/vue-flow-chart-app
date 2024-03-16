import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
// Import Vuetify and its styles
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
// Import components and directives for Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Import Pinia
import { createPinia } from 'pinia';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  // You can add more Vuetify options here
});

// Create the Vue application instance
const app = createApp(App);

// Use Pinia and Vuetify
app.use(createPinia());
app.use(vuetify);

// Mount the app
app.mount('#app');
