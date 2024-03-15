// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles globally
import '@mdi/font/css/materialdesignicons.css' // Import the material design icons used by Vuetify

// Import any additional Vuetify components or utilities here

// Define and configure Vuetify instance
const vuetify = createVuetify({})

// Export the Vuetify instance to be used in your main entry file (main.ts)
export default vuetify;
