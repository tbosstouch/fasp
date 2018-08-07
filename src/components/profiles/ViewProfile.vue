<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 class="mt-4">
      <v-card>
        <v-card-media
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="300px"
        >
          <v-layout
            column
            fill-height
          >
            <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>

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
              <div class="display-1 pl-5 pt-5">Ali Conners</div>
            </v-card-title>
          </v-layout>
        </v-card-media>

        <v-list two-line>
          <v-list-tile class="mt-2">
            <v-list-tile-content class="mb-3">
              <v-list-tile-title>Job Roles Background</v-list-tile-title>
              <v-list-tile-sub-title>Accountant</v-list-tile-sub-title>
              <v-list-tile-sub-title>Software Developer</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider ></v-divider>
        
        <v-list-tile class="mt-2">
            <v-list-tile-content class="mb-3">
              <v-list-tile-title>Tertiary Qualifications</v-list-tile-title>
              <v-list-tile-sub-title>BCom</v-list-tile-sub-title>
              <v-list-tile-sub-title>Software Developement Diploma</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        
        <v-divider ></v-divider>
          
          <v-list-tile class="mt-2">
            <v-list-tile-content class="mb-3">
              <v-list-tile-title>Skills</v-list-tile-title>
              <v-list-tile-sub-title>Finacial Accounting</v-list-tile-sub-title>
              <v-list-tile-sub-title>C++</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        <v-divider></v-divider>
        <v-card-actions class="mt-2">
        
        <v-btn color="cyan" dark> Request Connection</v-btn>
        <v-btn color="red accent-3" dark> Cancel</v-btn>
        </v-card-actions>

        </v-list>
    </v-card>
    </v-flex>
  </v-layout>
</template>