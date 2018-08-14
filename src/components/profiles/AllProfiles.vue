<template>
    <v-container>
        <v-layout align-center row wrap class="mb-4">
            <v-flex>
            <h3 class="display-1">Welcome to the Find a Skills Partner Site</h3>
            
            <p class="subheading mt-4">
                Have an idea that you would like to pursue but short of the skills required to get to minimum viable product?
                find an interested skills partner to pursue the idea with. Search for people that have the type of skills you're
                looking for, connect with them and find out if they may be interested in partnering with you.
            </p>
      
            </v-flex>          
        </v-layout>
        <SearchBar />
        <v-layout row wrap v-if="userProfilesLoading" class="mt-5">
            <v-flex xs12 offset-sm3>
                <v-progress-circular
                :size="70"
                :width="7"
                color="cyan"
                indeterminate
                ></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-5" v-if="!userProfilesLoading">
            <v-flex xs12 sm10 offset-sm1>
                <v-card>
                     <v-list two-line subheader>
                            <v-subheader inset>Request a Connection</v-subheader>
                        </v-list>
                </v-card>
                <v-card v-for="user in userProfiles" :key="user.id" class="mb-0.5">
                    <v-list-tile  avatar :to="{ name: 'ViewProfile', params: { id: user.id}}">
                        <v-list-tile-avatar>
                            <img :src="user.imageUrl">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <span v-if="user.jobRoles">
                                <v-list-tile-title>{{ user.jobRoles[0] }}</v-list-tile-title>
                            </span>
                            <v-list-tile-sub-title>{{ user.name }} {{ user.lastName }}</v-list-tile-sub-title>
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
import db from '@/firestore/init'

export default {
    methods: {
        printStuff() {
            console.log('THis is for connecting')
        }
    },
    computed: {
        userProfiles() {
            return this.$store.getters.userProfiles
        },
        userProfilesLoading() {
            return this.$store.getters.loading
        }
    },
    components: {
        SearchBar
    },
    created() {
        this.$store.dispatch('getUserProfiles')
    }
}   
</script>    

<style>

</style>
