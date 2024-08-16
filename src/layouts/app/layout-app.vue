<template>
  <div class="divide-y divide-gray-300">
    <component-navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ComponentNavbar from "./component-navbar.vue";
</script>
