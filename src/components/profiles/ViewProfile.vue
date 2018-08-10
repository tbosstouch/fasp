<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 class="mt-4">
      <v-card>
        <v-card-media
          :src="user.imageUrl"
          height="300px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-spacer></v-spacer>

              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{ user.name }} {{ user.lastName }}</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Job Roles Background</span><br>
            <ul v-for="role in user.jobRoles" :key="role.id">
              <li>{{ role }}</li>
            </ul>
          </div>
          </v-card-title>
           <v-divider></v-divider>
           <v-card-title>
          <div>
            <span class="grey--text">Qualifications</span><br>
            <ul v-for="qualification in user.qualifications" :key="qualification.id">
              <li>{{ qualification }}</li>
            </ul>
          </div>
        </v-card-title>
        <v-divider></v-divider>
           <v-card-title>
          <div>
            <span class="grey--text">Skills</span><br>
            <ul v-for="skill in user.skills" :key="skill.id">
              <li>{{ skill }}</li>
            </ul>
          </div>
        </v-card-title>

        <v-divider></v-divider>
        <v-card-actions class="mt-2">
        
        <v-btn color="cyan" dark>Request Connection</v-btn>
        <v-btn color="red accent-3" dark :to="{ name: 'AllProfiles' }"> Cancel</v-btn>
        </v-card-actions>
        
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    user() {
      return this.$store.getters.userProfile(this.id)
    }
  }
}
</script>
