<template>
<v-container>
  <v-layout row wrap class="mb-2">
    <v-flex xs12 sm8 offset-sm2>
      <span class="display-1 grey--text">Create My Profile</span>
    </v-flex>
  </v-layout>
  <v-layout row wrap class="mb-2">
    <v-flex xs12 sm8 offset-sm2>
      <v-form @submit.prevent="createUser" v-model="valid">
        <v-text-field v-model="name" :rules="nameRules" label="Name" color="cyan" required></v-text-field>
        <v-text-field v-model="lastName" :rules="lastNameRules" label="Last Name" color="cyan" required></v-text-field>
        <v-text-field v-model="imageUrl" label="image-url" color="cyan"></v-text-field>
        <v-text-field v-model="jobsString" :rules="jobRules"  label="Use a comma to list multiple" placeholder="Job Roles" color="cyan" required></v-text-field>
        <v-text-field v-model="qualString" label="Use a comma to list multiple" placeholder="Qualifications" color="cyan"></v-text-field>
        <v-text-field v-model="skillString" label="Use a comma to list multiple" placeholder="Skills" color="cyan"></v-text-field>
        <v-btn color="cyan" dark type="submit" :disabled="!formIsValid">Create</v-btn>
      </v-form>
      
    </v-flex>
  </v-layout>
</v-container>
</template>
  
  <script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      lastName: '',
      imageUrl: '',
      jobsString: '',
      qualString: '',
      skillString: '',
      jobRoles: [],
      qualifications: [],
      skills: [],

      nameRules: [
        v => !!v || 'Name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
      ],
      jobRules: [
        v => !!v || 'At least one current or previous job is required',
      ],
    }),
    computed: {
      formIsValid() {
       return this.name !== '' && this.lastName !== '' && this.jobsString !== ''
      }
    },
    methods: {
      createUser() {
        if (this.name && this.lastName && this.jobsString) {
          //Jobs
          if (this.jobsString) {
            if (this.jobsString.indexOf(',') !== -1) {
              this.jobRoles = this.jobsString.split(',')

              this.jobRoles.forEach(jobRole => {
                if (jobRole.trim() == '') {
                  this.jobRoles.pop()
                }
              })
            } else {
              this.jobRoles.push(this.jobsString)
            }
          } 
          //Qualifications
          if (this.qualString) {
            if (this.qualString.indexOf(',') !== -1) {
              this.qualifications = this.qualString.split(',')
        
              this.qualifications.forEach(qualification => {
                if (qualification.trim() == '') {
                  this.qualifications.pop()
                }
              })
            } else {
              this.qualifications.push(this.qualString)
            }
          }
          //Skills
          if (this.skillString) {
            if (this.skillString.indexOf(',') !== -1) {
              this.skills = this.skillString.split(',')

              this.skills.forEach(skill => {
                if (skill.trim() == '') {
                  this.skills.pop()
                }
              })
            } else {
              this.skills.push(this.skillString)
            }
          }

          //Create object to send to store component
          const profileData = {
            name: this.name,
            lastName: this.lastName,
            imageUrl: this.imageUrl,
            jobRoles: this.jobRoles,
            qualifications: this.qualifications,
            skills: this.skills,
            date: Date.now()
          }
         
          this.$store.dispatch('createProfile', profileData)
          this.$router.push({ name: 'AllProfiles'})

        }
      }
    }
}
</script>

<style>
</style>
