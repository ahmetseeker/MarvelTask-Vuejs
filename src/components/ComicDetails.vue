<template lang="html">
    <div class="comic-box">
        <div v-for="item in comic">
            <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" class="comic-img" alt="">
        </div>
        
            <div class="comic-details" v-for="item in comic">
                <div class="comic-title">{{ item.title }}</div>
                <div class="comic-desc">
                    {{ item.description }}
                </div>
                <div class="creators">
                    Creators:
                    <span v-for="crts in item.creators.items">
                         {{ crts.name }}, 
                    </span>    
                </div>
                <div class="buttons">
                    <button class="btn-watch">Watch Trailer</button>
                    <router-link :to="{ name: 'favorites'}">
                        <button class="btn-fav" @click="addToFavorite()">Add To Favorites</button>
                    </router-link>
                </div>
            </div>

    
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {

    name: 'ComicDetails',

    data() {
        return {
        }
    },

    mounted() {
        this.$store.dispatch('getComic', this.$route.params.id);


    },

    computed: {
        ...mapState({
            comic: state => state.comic,
            favorites: state => state.favorites
        })
    },  

    methods: {

        addToFavorite() {
            this.$store.dispatch('addToFavorites', this.$route.params.id);
        }

    }
}
</script>

<style lang="css">
   .comic-box {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 20px;
    margin: 70px;
    background-color: #B31312;
    border-radius: 25px;
   }

   .comic-img {
    height: 500px;
    width: auto;
    max-width: 300px;
    object-fit: cover;
    border-radius: 25px;
   }

   .comic-title {
    font-size: 25px;
    color: white;
    text-align: center;
   }

   .comic-details {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 100%;
    height: 500px;
    width: auto;
    gap: 25px;
   }

   .comic-details button {
    padding: 10px;
    margin: 5px;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: none;
   }

</style>