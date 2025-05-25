<template>
  <div>
    <div class="text-3xl font-bold mb-6 text-black p-6">Em alta</div>
    <div class="flex items-center w-full px-6 shadow-md mb-6">
      <q-input
        v-model="searchTerm"
        @keyup.enter="searchGifs"
        placeholder="Pesquisar todos os GIFs"
        clearable
        outlined
        class="flex-grow p-3 rounded-full"
      />
      <q-btn
        flat
        round
        icon="search"
        @click="searchGifs"
        class="text-black w-12 h-12 flex items-center justify-center ml-2 rounded-full"
      />
    </div>

    <q-page class="flex flex-col items-center">
      <div v-if="gifs.length === 0" class="text-center">Carregando GIFs...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full px-4"
      >
        <div v-for="gif in gifs" :key="gif.id" class="text-center">
          <img
            :src="gif.images.fixed_height.url"
            :alt="gif.title"
            class="w-full h-48 object-cover rounded-lg mb-2 shadow-lg"
          />
          <q-btn
            @click="() => store.addToFavoritos(gif)"
            label="Favoritar"
            class="block w-full mx-auto bg-blue-500 hover:bg-pink-600 text-black rounded-full"
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
