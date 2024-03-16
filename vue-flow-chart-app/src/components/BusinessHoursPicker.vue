<template>
    <div class="business-hours-picker">
      <v-container>
        <v-row v-for="(hours, day) in businessHours" :key="day">
          <v-col cols="3">
            <v-select
              :label="day"
              :items="['Closed', 'Open']"
              v-model="hours.status"
            />
          </v-col>
          <v-col cols="4" v-if="hours.status === 'Open'">
            <v-time-picker v-model="hours.start" format="24hr" />
          </v-col>
          <v-col cols="4" v-if="hours.status === 'Open'">
            <v-time-picker v-model="hours.end" format="24hr" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const businessHours = ref({
    Monday: { status: 'Open', start: '09:00', end: '17:00' },
    Tuesday: { status: 'Open', start: '09:00', end: '17:00' },
    // ... for each day of the week
  });
  </script>
  
  <style scoped>
  .business-hours-picker {
    /* Styles for your picker */
  }
  </style>
  