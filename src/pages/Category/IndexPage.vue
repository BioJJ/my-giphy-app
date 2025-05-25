<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-2xl mb-4">Categorias</div>
    <q-page class="w-full">
      <div
        v-if="searchTerm.length !== 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div v-for="gif in searchTerm" :key="gif.id" class="text-center">
          <div class="relative h-[250px] w-full overflow-hidden">
            <img
              :src="gif.images.fixed_height.url"
              :alt="gif.title"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <q-btn
            @click="() => store.addToFavorites(gif)"
            label="Favoritar"
            class="mt-2 bg-blue-500 text-white"
          />
        </div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="category in categories"
          :key="category.name_encoded"
          class="text-center relative"
        >
          <div
            @click="() => fetchSubcategories(category)"
            class="relative h-[250px] w-full overflow-hidden"
          >
            <img
              :src="category.gif.images.fixed_height.url"
              :alt="category.name"
              class="w-full h-48 object-cover rounded-lg"
            />
            <div
              class="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white font-bold text-lg"
            >
              {{ category.name.toUpperCase() }}
            </div>
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
/* A seção de estilo pode ser removida se não houver mais estilos personalizados */
</style>
