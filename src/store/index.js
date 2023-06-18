import Vue from 'vue'
import Vuex from 'vuex'
import { public_key, base_url } from '@/marvel';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comics: [],
    characters: [],
    series: [],
    comic: [],
    favorites: []
  },
  getters: {
  },
  mutations: {
    async getComics(state) {

      state.comics = [];

      try {
        const response = await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`);
        const data = await response.json();
        data.data.results.forEach(item => {
          console.log(item);
          state.comics.push(item);
        });
      } catch(error) {
        console.log(error);
      }
    },

    async getComic(state, id) {
      
      state.comic = [];

      try {
          const response = await fetch(`${base_url}/${id}?apikey=${public_key}`);
          const data = await response.json();
          data.data.results.forEach(item => {
              state.comic.push(item);
              console.log(item)
          });
      } catch(error) {
          console.log(error);
      }
    },

    async addToFavorites(state, id) {

      
      try {
          let isFavorite;
          const response = await fetch(`${base_url}/${id}?apikey=${public_key}`);
          const data = await response.json();
          data.data.results.forEach(item => {
              
              state.favorites.forEach(element => {
                if(element.id == item.id) {
                  isFavorite = true;
                } else {
                  isFavorite = false;
                }
              });
              if(isFavorite) {
                console.log("Already added to favorite!")
              } else {
                state.favorites.push(item);
              }
          });
      } catch(error) {
          console.log(error);
      }
    },
    
    async getCharacters(state) {

      state.characters = [];

      try {
        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`);
        const data = await response.json();
        data.data.results.forEach(item => {
          console.log(item);
          state.characters.push(item);
        });
      } catch(error) {
        console.log(error);
      }
    },

    async getSeries(state) {

      state.series = [];

      try {
        const response = await fetch(`http://gateway.marvel.com/v1/public/series?apikey=${public_key}`);
        const data = await response.json();
        data.data.results.forEach(item => {
          console.log(item);
          state.series.push(item);
        });
      } catch(error) {
        console.log(error);
      }
    },
    

  },
  actions: {
    getComics: context => {
      context.commit('getComics')
    },

    getComic(context, id) {
      context.commit('getComic', id)
    },

    addToFavorites(context, id) {
      context.commit('addToFavorites', id)
    },

    getCharacters: context => {
      context.commit('getCharacters')
    },

    getSeries: context => {
      context.commit('getSeries')
    },

  },
  modules: {
  }
})
