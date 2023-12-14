<!-- pages/index.vue -->
<template>
    <div>
      <h1>Home Page</h1>
      <button @click="goToRegistration">Go to Registration</button>
      <button @click="goToCheck">Go to Check</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToRegistration() {
        this.$router.push('/registration'); // Navigate to the registration page
      },
      goToCheck() {
        this.$router.push('/check'); // Navigate to the check page
      },
    },
  };
  </script>
  