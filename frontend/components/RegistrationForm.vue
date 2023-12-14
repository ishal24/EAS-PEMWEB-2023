<!-- components/RegistrationForm.vue -->
<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input v-model="formData.Nama" type="text" id="Nama" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="formData.Email" type="email" id="Email" required />
        </div>
  
        <div class="form-group">
          <label for="asalSekolah">Asal Sekolah:</label>
          <input v-model="formData.AsalSekolah" type="text" id="AsalSekolah" required />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          Nama: "",
          Email: "",
          AsalSekolah: "",
          Status: "waiting",
          TanggalPendaftaran: "", // Empty initially
        },
      };
    },
    methods: {
      submitForm() {
        // Set the TanggalPendaftaran field to the current date in the desired format
        this.formData.TanggalPendaftaran = new Date().toISOString();
  
        fetch('http://127.0.0.1:3000/api/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // Reset the form after submission
            this.formData = {
              Nama: '',
              Email: '',
              AsalSekolah: '',
              Status: 'waiting',
              TanggalPendaftaran: '',
            };
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
<style scoped>
.form-group {
margin-bottom: 10px;
}
</style>
  