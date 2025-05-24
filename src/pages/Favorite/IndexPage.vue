<template>
  <div>
    <div class="text-h6 q-mb-md">Favoritos</div>
    <q-page class="grid-container">
      <div v-if="favoritos.length === 0">Sem Favoritos...</div>
      <div v-else class="grid">
        <div v-for="gif in favoritos" :key="gif.id" class="gif-container">
          <img :src="gif.images.fixed_height.url" :alt="gif.title" height="200" />
          <q-btn
            @click="() => store.removeFromFavoritos(gif.id)"
            label="Remover"
            class="favorite-button"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGiphyStore } from '../../stores/useGiphyStore.store';

const store = useGiphyStore();

const { favoritos } = storeToRefs(store);
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
