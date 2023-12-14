<!-- pages/registration.vue -->
<template>
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  </template>
  
  <script>
  import RegistrationForm from '~/components/RegistrationForm.vue';
  
  export default {
    components: {
      RegistrationForm,
    },
  };
  </script>
  