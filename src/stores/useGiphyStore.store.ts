import axios from 'axios';
import { defineStore } from 'pinia';
import type { Gif } from 'src/model/Gifs.model';

export const useGiphyStore = defineStore('giphy', {
  state: () => ({
    gifs: [] as Gif[],
    favoritos: JSON.parse(localStorage.getItem('favoritos') || '[]'),
  }),
  actions: {
    async fetchGifs(trending = true, search = '') {
      const apiKey = import.meta.env.VITE_APP_KEY;
      const url = trending
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`
        : `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=25`;

      try {
        const response = await axios.get(url);
        console.log('Response:', response);
        this.gifs = response.data.data;
      } catch (error) {
        console.error('Erro ao buscar GIFs:', error);
      }
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
