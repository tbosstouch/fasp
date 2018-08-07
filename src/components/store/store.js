import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        personalData: [
            {
                imageURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                jobBackground: 'Software Developer',
                name: 'Ali Connors'
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {}
})