<template lang="html">
    <div class="favorites">
        <h1 class="main-title">Favorites</h1>
        <div class="container">
            <div class="favorite-items" v-for="item in favorites">
                <h5 class="card-header truncate">
                        {{ item.title }}
                </h5>
                <div class="card">
                    <div class="card-body">
                        <router-link :to="{ name: 'comic', params: { id: item.id }}">
                        <img :src="item.thumbnail.path + '.' + item.thumbnail.extension" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { mapState } from 'vuex';
export default {
    name: 'Favorites',

    data() {
        return {
        }
    },

    mounted() {
    },

    computed: {
        ...mapState({
            favorites: state => state.favorites,

        })
    },

    methods: {
           
    }
}
</script>

<style lang="css">

    .favorites {
        background-color: black;
        height: 100%;
    }

    .main-title {
        font-size: 48px;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding: 20px;
        margin-bottom: 30px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        padding: 80px;
        background-color: #B31312;
        color: white;
        border-radius: 14px;
    }

    .favorite-items {
        margin: 24px;
        width: 210px;
    }

    .favorite-items .card {
        border-radius: 10px;
        width: 210px;
        height: 350px;
        max-height: 350px;
    }

    .card-header {
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-bottom: 10px;
    }

    .card .card-body {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
    }

    .card .card-body img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .truncate {
        width: 210px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>