<!-- pages/CheckStatus.vue -->
<template>
    <div>
      <h1>Check Registration Status</h1>
      <form @submit.prevent="checkStatus">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
        <button type="submit">Check Status</button>
      </form>
  
      <div v-if="registrationStatus">
        <h2>Registration Status:</h2>
        <p>Nama: {{ registrationStatus.Nama }}</p>
        <p>Email: {{ registrationStatus.Email }}</p>
        <p>Asal Sekolah: {{ registrationStatus.AsalSekolah }}</p>
        <p>Status: {{ registrationStatus.Status }}</p>
        <p>Tanggal Pendaftaran: {{ formatDate(registrationStatus.TanggalPendaftaran) }}</p>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      email: "",
      registrationStatus: null,
      errorMessage: null,
    };
  },
  methods: {
    checkStatus() {
      // Reset the registrationStatus and errorMessage before making a new request
      this.registrationStatus = null;
      this.errorMessage = null;

      fetch(`http://127.0.0.1:3000/api/Registration?email=${this.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.docs && data.docs.length > 0) {
            const userRegistration = data.docs.find(registration => registration.Email === this.email);
            if (userRegistration) {
              this.registrationStatus = userRegistration;
            } else {
              this.errorMessage = 'No registration found for the provided email.';
            }
          } else {
            this.errorMessage = 'No registrations found.';
          }
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'An error occurred while fetching the registration status.';
        });
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>



  
  <style scoped>
  form {
    margin-bottom: 20px;
  }
  </style>
  