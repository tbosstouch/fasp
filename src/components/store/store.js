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
        user : null
    },
    mutations: {
        createProfile(state, payload) {
            state.userProfiles.push(payload)
        },
        
        createUser(state, payload) {
            state.user = payload
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
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(createdUser => {
                const newUser = {
                    id: createdUser.user.uid,
                    userProfile: {},
                    userConnections: {},
                    chatMessages: {}
                }
                commit('createUser', newUser)
            })
            .catch(error => {
                console.log(error.message)
            })
        }
    },
    getters: {
        userProfiles(state) {
            return state.userProfiles
        },
        user(state) {
            return(userId) => {
                return state.userProfiles.find(user => {
                    return user.id === userId
                })
            } 
        }
    }
})