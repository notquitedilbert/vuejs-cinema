import Vue from 'vue'
import './style.scss'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'
new Vue({

    el: '#app',
    data: {
        genre: [],
        times: []
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
    }
})
