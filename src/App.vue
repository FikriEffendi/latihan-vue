<script setup>
import { ref } from "vue";

const isShow = ref(false);
</script>

<template>
  <div class="divide-y divide-gray-300">
    <div class="flex items-center justify-between p-4 bg-gray-200">
      <div class="p-2">logo</div>
      <div class="relative p-2">
        <button
          @click="isShow = !isShow"
          class="px-3 py-1 transition-all bg-white border rounded hover:bg-gray-200 hover:shadow active:shadow-none"
        >
          Filter
        </button>
        <div
          v-if="isShow"
          class="absolute text-center bg-gray-300 border divide-y rounded-md right-3 min-w-40 top-12"
        >
          <div class="cursor-pointer hover:bg-white">Harga termurah</div>
          <div class="cursor-pointer hover:bg-white">Harga termahal</div>
        </div>
      </div>
    </div>
    <div>
      <div>halo</div>
    </div>
  </div>
</template>
