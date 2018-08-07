<template>
    <v-container>
        <v-layout align-center row wrap class="mb-4">
            <v-flex>
            <h3 class="display-1">Welcome to the Find a Skills Partner Site</h3>
            
            <p class="subheading mt-4">
                Have an idea that you would like to pursue but short of the skills required to get to minimum viable product,
                find an interested skills partner to pursue the idea with. Search for people that have the type of skills you're
                looking for, connect with them and find out if they may be interested in partnering with you.
            </p>
      
            </v-flex>          
        </v-layout>
        <SearchBar />
        <v-layout row wrap class="mt-5">
            <v-flex xs12>
                <v-card>
                     <v-list two-line subheader>
                            <v-subheader inset>Request a Connection</v-subheader>
                        </v-list>
                </v-card>
                <v-card v-for="item in items" :key="item.title" class="mb-0.5">
                       
                    <v-list-tile  avatar>
                        <v-list-tile-avatar>
                            <img :src="item.imageURL">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.jobBackground }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="cyan">link</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                    </v-list-tile>
                    <v-divider inset></v-divider>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import SearchBar from './SearchBar'

  export default {
    data () {
      return {
        items: [
          { imageURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', jobBackground: 'Software Developer', name: 'Ali Connors' },
          { imageURL: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', jobBackground: 'Accountant', name: 'Alex Scott' },
          { imageURL: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', jobBackground: 'Marketing Specialist', name: 'Sandra Adams' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ]
      }
    },
    components: {
        SearchBar
    }
  }
</script>    
