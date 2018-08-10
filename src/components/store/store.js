import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userProfiles : [
            {   id: 'asdfrewq',
                imageUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
                name: 'Ali Connors',
                jobRoles: ['Software Developer', 'Accountant', 'Journalist'],
                qualifications: ['BCom', 'Physics', 'BSc'],
                skills: ['C++', 'JavaScript', 'IFRS', 'Cost Accounting']
            },
            {   id: 'lkjhyuiop',
                imageUrl: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
                name: 'Alex Scott',
                jobRoles: ['Marketing', 'Hr'],
                qualifications: ['Marketing Diploma', 'Hr Degree'],
                skills: ['Recruitment', 'Marketing Strategy', 'Sales']
            },
            {   id: 'mnbvghjl',
                imageUrl: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
                name: 'Sandra Adams',
                jobRoles: ['Electrical Engineering'],
                qualifications: ['BSc Electrical'],
                skills: ['Engineering Design', 'Electrical Planning']
            },
        ],
        user : null,
        loading: false,
        error: null
    },
    mutations: {
        createProfile(state, payload) {
            state.userProfiles.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        createProfile({ commit }, payload) {
            const profile = {
                id: 'jjjjtheieirh',
                name: payload.name,
                lastName: payload.lastName,
                imageUrl: payload.imageUrl,
                jobRoles: payload.jobRoles,
                qualifications: payload.qualifications,
                skills: payload.skills,
                date: payload.date
            }
            //Store profile in firebase and then get user_id to store it with the new object in state

            //then store the object in state
            commit('createProfile', profile)
        },

        firebaseRegisterUser({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(createdUser => {
                const newUser = {
                    id: createdUser.user.uid,
                    userProfile: {},
                    userConnections: {},
                    chatMessages: {}
                }
                commit('setLoading', false)
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setError', error.message)
                commit('setLoading', false)
            })
        },

        firebaseLoginUser({ commit }, payload) {
            commit('clearError')
            commit('setLoading', true)
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(returnedUser => {
                //AT THIS POINT, I MUST ALWAYS CHECK IF THE USER HAS THE FOLLOWING IN THEIR PROFILE
                //name, last name & something in job Roles, failing witch I must send them back to the register profile form
                const loggedInUser = {
                    id: returnedUser.user.uid,
                    userProfile: {},
                    userConnections: {},
                    chatMessages: {}
                }
                commit('setLoading', false)
                commit('setUser', loggedInUser)
            })
            .catch(error => {
                commit('setError', error.message)
                commit('setLoading', false)
            })
        },

        clearError({ commit }) {
            commit('clearError')
        }

    },
    getters: {
        userProfiles(state) {
            return state.userProfiles
        },
        userProfile(state) {
            return(userId) => {
                return state.userProfiles.find(userProfile => {
                    return userProfile.id === userId
                })
            } 
        },
        userLoginState(state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})