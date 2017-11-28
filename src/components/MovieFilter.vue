<template>
  <div id="movie-filter">
    <h2>filter results</h2>
    <h3>by time</h3>
    <div class="filter-group">
        <check-filter v-for="time in times" category="time" v-bind:title="time" v-on:check-filter="checkFilter" v-bind:key="time.index"></check-filter>
    </div>
    <h3>by genre</h3>
    <div class="filter-group">
        <check-filter v-for="genre in genres" category="genre" v-bind:title="genre" v-on:check-filter="checkFilter" v-bind:key="genre.index"></check-filter>
    </div>
    </div>
</template>
<script>

import genres from '../util/genres';
import times from '../util/times';
import CheckFilter from './CheckFilter.vue';


export default {
    data() {
        return { genres ,times}
        },

    methods:{
        checkFilter(category,title,checked){
            this.$emit('check-filter',category,title,checked)
            }
        },
    components: {
        CheckFilter
        }
}
</script>
