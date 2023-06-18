<template>
    <div>
        <div class="main-page">
            <div class="marvel-intro">
                <h1>MARVEL</h1>
                <p>The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.</p>

            </div>
            <!-- <img class="marvel-main-img" src="../assets/marvel.jpg" alt=""> -->
        </div>
        <div class="comics">
            <h3 class="comics-title">Comics</h3>
            <ul class="comics-list">
                <li v-for="comic in comics" v-bind:key="comic.id" class="comic-list-item"> 
                    <h5 class="truncate card-header">{{ comic.title }}</h5>
                    <div class="card-body">
                        <router-link :to="{ name: 'comic', params: { id: comic.id }}">
                            <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="">
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>

        <div class="comics">
            <h3 class="comics-title">Series</h3>
            <div class="comics-list">
                <div class="comic-list-item" v-for="item in series" v-bind:key="item.id">
                    <h5 class="card-header truncate">
                            {{ item.title }}
                    </h5>
                        <div class="card-body">
                                <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" alt="">
                        </div>
                </div>

            </div>
        </div>

        <div class="comics">
            <h3 class="comics-title">Characters</h3>
            <div class="comics-list">
                <div class="comic-list-item" v-for="item in characters" v-bind:key="item.id">
                    <h5 class="card-header truncate">
                            {{ item.name }}
                    </h5>
                        <div class="card-body">
                                <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" alt="">
                        </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { private_key, public_key } from '../marvel';
import { mapState } from 'vuex';
export default {
    name: 'Comics',

    mounted() {
        this.$store.dispatch('getComics')
        this.$store.dispatch('getCharacters')
        this.$store.dispatch('getSeries')
        console.log(this.comics)
    },

    computed: {
      ...mapState({
        comics: state => state.comics,
        characters: state => state.characters,
        series: state => state.series
      })
    },

    methods: {
    
  }
}
</script>

<style lang="css">

    .comics, .characters {
        padding: 20px;
        background-color: black;
        max-width: 100%;
    }

    .comics-title, .character-title {
        padding: 10px;
        text-align: start;
        font-size: 18px;
        font-weight: bold;
        color: white;
    }

    .comics-list, .characters-list {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 25px 12px;
    }

    .comic-list-item, .characters-list-item {
        background-color: #B31312;
        padding: 10px;
        border-radius: 7px;
        
        text-align: center;
        transition: all .5s ease;
    }

    .comic-list-item {
        background-color: transparent;
    }

    .comic-list-item .card-body {
        width: 130px;
        height: 200px;
    }

    .comic-list-item .card-body img {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 10px;
    }

    .comic-list-item .card-header {
        text-align: center;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-bottom: 10px;
    }

    .comic-list-item .truncate {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .comic-list-item:hover, .characters-list-item:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .comics-list a, .characters-list a {
        text-decoration: none;
        color: white;
        font-size: 10px;
    }

    /* .marvel-main-img {
        max-width: 100%;
        width: 100%;
        height: 700px;
        object-fit: cover;
    } */

    .main-page {
        background-image: url("../assets/marvel.jpg");
        background-position: top;
        background-size: 2000px 1200px;
        background-repeat: no-repeat;
        height: 700px;
        object-fit: cover;
        text-align: start;
        color: white;
    }

    .main-page .marvel-intro {
        width: 900px;
        padding: 100px;
        padding-top: 200px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 18px;
    }

    .marvel-intro h1 {
        margin-bottom: 15px;
    }

</style>