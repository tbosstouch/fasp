import Vue from 'vue'
import Router from 'vue-router'
import AllProfiles from '@/components/profiles/AllProfiles'
import MyProfile from '@/components/profiles/MyProfile'
import ViewProfile from '@/components/profiles/ViewProfile'
import Register from '@/components/auth/Register'
import Signin from '@/components/auth/Signin'
import MyConnections from '@/components/connections/MyConnections'
import MyProfileForm from '@/components/profiles/forms/MyProfileForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AllProfiles',
      component: AllProfiles
    },
    {
      path: '/myprofile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/myprofileform',
      name: 'MyProfileForm',
      component: MyProfileForm
    },
    {
      path: '/viewprofile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      props: true
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/myconnections',
      name: 'MyConnections',
      component: MyConnections
    },

  ]
})
