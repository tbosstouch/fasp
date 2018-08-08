<template>
<v-container>
  <v-layout row wrap class="mb-2">
    <v-flex xs12 sm6 offset-sm3>
      <span class="display-1 secondary--text">Create My Profile</span>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="mb-2">
    <v-flex xs12 sm6 offset-sm3>
      <v-form @submit.prevent="createUser" v-model="valid">
        <v-text-field v-model="name" :rules="nameRules" label="Name" color="cyan" required></v-text-field>
        <v-text-field v-model="lastName" :rules="lastNameRules" label="Last Name" color="cyan" required></v-text-field>
        <v-text-field v-model="imageUrl" label="image-url" color="cyan"></v-text-field>
        <v-text-field v-model="jobsString" label="Use a comma to list multiple" placeholder="Job Roles" color="cyan"></v-text-field>
        <v-text-field v-model="qualString" label="Use a comma to list multiple" placeholder="Qualifications" color="cyan"></v-text-field>
        <v-text-field v-model="skillString" label="Use a comma to list multiple" placeholder="Skills" color="cyan"></v-text-field>
        <v-btn color="cyan" dark type="submit">Create</v-btn>
      </v-form>
      
    </v-flex>
  </v-layout>
</v-container>
</template>
  
  <script>
  export default {
    data: () => ({
      valid: false,
      name: null,
      lastName: null,
      imageUrl: null,
      jobsString: null,
      qualString: null,
      skillString: null,
      jobRoles: [],
      qualifications: [],
      skills: [],

      nameRules: [
        v => !!v || 'Name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
      ],
    }),
    methods: {
      createUser() {
        //Jobs
        if (this.jobsString) {
          if (this.jobsString.indexOf(',') !== -1) {
            this.jobRoles = this.jobsString.split(',')
            this.jobsString = null
            console.log(this.jobRoles)
          } else {
            this.jobRoles = this.jobsString
            this.jobsString = null
            console.log(this.jobRoles)  
          }
        }
        //Qualifications
        if (this.qualString) {
          if (this.qualString.indexOf(',') !== -1) {
            this.qualifications = this.qualString.split(',')
            this.qualString = null
            console.log(this.qualifications)
          } else {
            this.qualifications = this.qualString
            this.qualString = null
            console.log(this.qualifications)
          }
        }
        
      }
    }
}
</script>

<style>
</style>
