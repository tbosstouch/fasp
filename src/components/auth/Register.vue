<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
                <span class="display-1 grey--text">Register</span>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
                <v-form @submit.prevent="registerUser">
                    <v-text-field v-model="email" color="cyan" :rules="emailRules" label="E-mail" required></v-text-field>
                    <v-text-field v-model="password" type="password" color="cyan" :rules="passwordRules" label="Password" required></v-text-field>
                    <v-text-field v-model="confirmPassword"  type="password" color="cyan" label="Confirm Password"></v-text-field>
                    <v-btn color="cyan" dark  type="submit" :disabled="!passwordsMatch">Register</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      email: '',
      password: '',
      confirmPassword: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ]
    }),
    computed: {
        passwordsMatch() {
            return this.password === this.confirmPassword
        }
    },
    methods: {
        registerUser() {
            console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
        }
    }
  }
</script>