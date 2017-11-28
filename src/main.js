import Vue from 'vue'
import './style.scss'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

import VueResource from 'vue-resource'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

Vue.use(VueResource)

new Vue({

    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day :moment()
    },
    methods: {
        checkFilter (cat, title, checked) {
            if (checked) {
                this[cat].push(title)
            } else {
                let index = this[cat].indexOf(title)
                if (index > -1) {
                    this[cat].splice(index, 1)
                }
            }
        }
    },
    components: {
        MovieList,
        MovieFilter
    },
    created () {
        this.$http.get('/api')
            .then(response => {
                this.movies = response.data
            })
    }
})
