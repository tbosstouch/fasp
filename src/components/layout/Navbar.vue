<template>
<nav>
    <v-toolbar color="cyan" dark>
        <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link :to="{ name: 'AllProfiles'}" tag="span" style="cursor:pointer">
                FaSP
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
                <v-icon left>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" absolute temporary class="cyan lighten-3" dark>
        <v-list>
            <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
    data() {
        return {
            sideNav: false,
        }
    },
    computed: {
        menuItems() {
            let menuItems = [
                { icon: 'lock_open', title: 'Login', link: '/signin' },
                { icon: 'face', title: 'Register', link: '/register' },
            ]
            if (this.userIsAuthenticated) {
                menuItems = [
                    { icon: 'supervisor_account', title: 'All Profiles', link: '/' },
                    { icon: 'link', title: 'My Connections', link: '/myconnections' },
                    { icon: 'person', title: 'My Profile', link: '/myprofile' },
                ]
            }
            return menuItems
        },
        userIsAuthenticated() {
            return this.$store.getters.userLoginState !== null && this.$store.getters.userLoginState !== undefined
        }
    }
}
</script>

