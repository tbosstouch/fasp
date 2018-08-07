import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [
            {   id: 'asdfrewq',
                imageURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
                name: 'Ali Connors',
                jobRole: ['Software Developer', 'Accountant', 'Journalist'],
                qualifications: ['BCom', 'Physics', 'BSc'],
                skills: ['C++', 'JavaScript', 'IFRS', 'Cost Accounting']
            },
            {   id: 'lkjhyuiop',
                imageURL: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
                name: 'Alex Scott',
                jobRole: ['Marketing', 'Hr'],
                qualifications: ['Marketing Diploma', 'Hr Degree'],
                skills: ['Recruitment', 'Marketing Strategy', 'Sales']
            },
            {   id: 'mnbvghjl',
                imageURL: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
                name: 'Sandra Adams',
                jobRole: ['Electrical Engineering'],
                qualifications: ['BSc Electrical'],
                skills: ['Engineering Design', 'Electrical Planning']
            },
        ],
        
    },
    mutations: {},
    actions: {},
    getters: {
        users(state) {
            return state.users
        },
        user(state) {
            return(userId) => {
                return state.users.find(user => {
                    return user.id === userId
                })
            } 
        }
    }
})