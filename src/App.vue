<template>
  <nav class="bg-primary flex items-center justify-center p-4 gap-5 w-full fixed top-0">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="mt-24">
    <router-view/>
  </div>
</template>

<style>
nav a.router-link-exact-active {
  color: #fff;
  background: rgb(209, 43, 43);
  padding: 2px 25px;
}
</style>
