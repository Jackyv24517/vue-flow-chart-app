import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import "./assets/index.css";
import router from './router'

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
    theme: {
        defaultTheme: 'light', // Explicitly set the default theme to 'light'
    },
    components,
    directives,
  // You can add more Vuetify options here
  
});

// Create the Vue application instance
const app = createApp(App);

// Use Pinia and Vuetify
app.use(router);
app.use(createPinia());
app.use(vuetify);

// Mount the app
app.mount('#app');
