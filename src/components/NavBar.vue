<template>
  <div class="flex">
    <nav class="w-1/4 bg-gray-800 text-white p-4">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/favoritos">Favoritos</router-link></li>
        <li><router-link to="/categorias">Categorias</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
      </ul>
    </nav>
    <main class="flex-1 p-4">
      <header class="flex justify-between items-center">
        <img src="@/assets/logo.svg" alt="Logo" />
        <h1>Desenvolvedor: Seu Nome</h1>
      </header>
      <router-view></router-view>
    </main>
  </div>
</template>
