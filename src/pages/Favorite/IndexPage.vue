<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-2xl mb-4">Favoritos</div>
    <q-page class="flex flex-col items-center w-full">
      <div v-if="favoritos.length === 0" class="text-2xl mt-8">Sem Favoritos...</div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
      >
        <div v-for="gif in favoritos" :key="gif.id" class="flex flex-col items-center">
          <img
            :src="gif.images.fixed_height.url"
            :alt="gif.title"
            class="w-full h-48 object-cover rounded-lg mb-2 shadow-lg"
          />
          <q-btn
            @click="() => store.removeFromFavoritos(gif.id)"
            label="Remover"
            class="mt-2 bg-red-500 text-white"
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
