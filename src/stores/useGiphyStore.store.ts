import axios from 'axios';
import { defineStore } from 'pinia';
import type { Category } from 'src/model/Category.model';
import type { Gif } from 'src/model/Gifs.model';
import { LocalStorage } from 'quasar';

export const useGiphyStore = defineStore('giphy', {
  state: () => ({
    gifs: [] as Gif[],
    categories: [] as Category[],
    favorites: JSON.parse(LocalStorage.getItem('favorites') || '[]'),
  }),
  actions: {
    async fetchGifs(trending = true, search = '') {
      const apiKey = import.meta.env.VITE_APP_KEY;
      const urlBase = import.meta.env.VITE_URL_BASE;
      const url = trending
        ? `${urlBase}/trending?api_key=${apiKey}&limit=25`
        : `${urlBase}/search?api_key=${apiKey}&q=${search}&limit=25`;

      try {
        const response = await axios.get(url);
        this.gifs = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar GIFs:', error);
      }
    },
    async fetchCategory(trending = true, search = '') {
      const apiKey = import.meta.env.VITE_APP_KEY;
      const urlBase = import.meta.env.VITE_URL_BASE;
      const url = trending
        ? `${urlBase}/categories?api_key=${apiKey}`
        : `${urlBase}/categories/${search}?api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log('response', response);
        this.categories = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar GIFs:', error);
      }
    },
    addToFavorites(gif: Gif) {
      this.favorites.push(gif);
      LocalStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFromFavorites(gifId: string) {
      this.favorites = this.favorites.filter((gif: Gif) => gif.id !== gifId);
      LocalStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
});
