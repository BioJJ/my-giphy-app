import axios from 'axios';
import { defineStore } from 'pinia';

export const useGiphyStore = defineStore('giphy', {
  state: () => ({
    gifs: [],
    favoritos: JSON.parse(localStorage.getItem('favoritos') || '[]'),
  }),
  actions: {
    async fetchGifs(trending = true, search = '') {
      const url = trending
        ? 'https://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY&limit=25'
        : `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${search}&limit=25`;

      const response = await axios.get(url);
      this.gifs = response.data.data;
    },
    addToFavoritos(gif: unknown) {
      this.favoritos.push(gif);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    },
    removeFromFavoritos(gifId: unknown) {
      this.favoritos = this.favoritos.filter((gif: { id: unknown }) => gif.id !== gifId);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    },
  },
});
