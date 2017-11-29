import Vue from 'vue'
import './style.scss'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import moment from 'moment-timezone'
import {checkFilter, setDay} from './util/bus'
import routes from './util/routes'

import ToolTip from './util/tooltip'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ToolTip)

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

const router = new VueRouter({routes})
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
    components:{
    },
    created () {
        this.$http.get('/api')
            .then(response => {
                this.movies = response.data
            })
        this.$bus.$on('check-filter',checkFilter.bind(this))
        this.$bus.$on('set-day',setDay.bind(this))
    },
    router

})


