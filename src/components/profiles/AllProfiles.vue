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
                <v-card v-for="user in users" :key="user.title" class="mb-0.5">
                    <v-list-tile  avatar :to="{ name: 'ViewProfile', params: { id: user.id}}">
                        <v-list-tile-avatar>
                            <img :src="user.imageURL">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <span v-if="user.jobBackground">
                                <v-list-tile-title>{{ user.jobBackground[0] }}</v-list-tile-title>
                            </span>
                            <v-list-tile-sub-title>{{ user.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon ripple @click.prevent="printStuff">
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
    methods: {
        printStuff() {
            console.log('THis is for connecting')
        }
    },
    computed: {
        users() {
            return this.$store.getters.users
        },
    },
    components: {
        SearchBar
    }
}   
</script>    
