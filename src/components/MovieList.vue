<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie" v-bind:key="movie.index">
            {{movie.title}}
        </div>
    </div>
</template>


<script>
import genres from '../util/genres';

export default {
 data: function () {
                return {
                    movies: [
                        { title: 'pulp fiction', genre:genres.CRIME },
                        { title: 'Kill Bill', genre:genres.CRIME },
                        { title: 'home alone', genre:genres.COMEDY },
                        { title: 'austin powers2', genre:genres.COMEDY}]
                }
            },
            props:['genre','times'],
            methods:{
                moviePassesGenreFilter(movie){
                    if(!this.genre.length){
                        return true
                    }else{
                    return this.genre.find(genre => movie.genre === genre)
                    }
                }
            },
            computed:{
                filteredMovies(){
                    return this.movies.filter(this.moviePassesGenreFilter)
                }
            }
}
</script>
