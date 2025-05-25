<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-blue-600 text-white shadow-md">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <img src="/src/assets/logo-2.png" alt="Logo" class="mr-2" />
        </q-toolbar-title>

        <div class="mr-4">NOME PROGRAMADOR</div>
        <q-icon name="account_circle" size="lg" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-gray-800 text-white" bordered>
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item to="/favoritos" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section>Favoritos</q-item-section>
        </q-item>

        <q-item to="/categorias" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="category" />
          </q-item-section>
          <q-item-section>Categorias</q-item-section>
        </q-item>

        <q-item to="/sobre" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="p-4">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
