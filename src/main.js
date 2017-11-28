import Vue from 'vue'
import './style.scss'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

import VueResource from 'vue-resource'

import moment from 'moment-timezone'
import {checkFilter} from './util/bus'

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

Vue.use(VueResource)


const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

new Vue({

    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day :moment(),
        bus

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
        this.$bus.$on('check-filter',checkFilter.bind(this))
    }
       
})
