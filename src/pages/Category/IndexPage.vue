<template>
  <div>
    <div class="text-h6 q-mb-md">Categorias</div>
    <q-page class="grid-container">
      <div v-if="searchTerm.length !== 0">
        <div class="grid">
          <div v-for="gif in searchTerm" :key="gif.id" class="gif-container">
            <img :src="gif.images.fixed_height.url" :alt="gif.title" height="250" />
            <q-btn
              @click="() => store.addToFavoritos(gif)"
              label="Favoritar"
              class="favorite-button"
            />
          </div>
        </div>
      </div>
      <div v-else class="grid">
        <div v-for="category in categories" :key="category.name_encoded" class="gif-container">
          <div class="image-overlay" @click="() => fetchSubcategories(category)">
            <img :src="category.gif.images.fixed_height.url" :alt="category.name" height="250" />
            <div class="overlay-text">{{ category.name.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGiphyStore } from '../../stores/useGiphyStore.store';
import type { Category } from '../../model/Category.model';
import type { Gif } from '../../model/Gifs.model';

const store = useGiphyStore();
const searchTerm = ref([] as Gif[]);

const { categories, gifs } = storeToRefs(store);

const fetchSubcategories = async (category: Category) => {
  if (category.subcategories) {
    await store.fetchCategory(false, category.name_encoded);
  } else {
    console.log(category.name_encoded);
    await store.fetchGifs(false, category.name_encoded);

    searchTerm.value = gifs.value;
  }
};

onMounted(async () => {
  await store.fetchCategory(true);
});
</script>

<style scoped>
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

.image-overlay {
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}

.favorite-button {
  display: block;
  margin: 10px auto;
}
</style>
