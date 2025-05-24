<template>
  <div>
    <div class="text-h6 q-mb-md">Em alta</div>
    <div class="search-bar-container">
      <q-input
        v-model="searchTerm"
        @keyup.enter="searchGifs"
        placeholder="Search all the GIFs"
        clearable
        outlined
        dense
        class="search-input"
      />
      <q-btn flat round icon="search" @click="searchGifs" class="search-button" />
    </div>
    <q-page class="grid-container">
      <div v-if="gifs.length === 0">Carregando GIFs...</div>
      <div v-else class="grid">
        <div v-for="gif in gifs" :key="gif.id" class="gif-container">
          <img :src="gif.images.fixed_height.url" :alt="gif.title" height="200" />
          <q-btn
            @click="() => store.addToFavoritos(gif)"
            label="Favoritar"
            class="favorite-button"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGiphyStore } from './../stores/useGiphyStore.store';
import { storeToRefs } from 'pinia';

const store = useGiphyStore();
const searchTerm = ref('');

const { gifs } = storeToRefs(store);

const fetchGifs = async () => {
  try {
    await store.fetchGifs(true);
    console.log('Response:', gifs);
  } catch (error) {
    console.error('Erro ao buscar GIFs:', error);
  }
};

const searchGifs = async () => {
  try {
    if (searchTerm.value) {
      await store.fetchGifs(false, searchTerm.value);
    } else {
      await fetchGifs();
    }
  } catch (error) {
    console.error('Erro ao pesquisar GIFs:', error);
  }
};

onMounted(async () => {
  await fetchGifs();
});
</script>

<style scoped>
.search-bar-container {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
}

.search-input {
  padding: 5px;
  flex-grow: 1;
}

.search-button {
  background: linear-gradient(135deg, #ff4081, #f50057);
  color: #000;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
}

.gif-container {
  text-align: center;
}
img {
  max-width: 200px;
}
.favorite-button {
  display: block;
  margin: 10px auto;
}
</style>
