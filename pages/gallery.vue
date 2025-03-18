<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold">Gallery</h1>
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ContentList path="/gallery" v-slot="{ list }">
        <div v-for="image in list" :key="image._path" class="aspect-square">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="w-full h-full object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
            @click="openImage(image)"
          >
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
const openImage = (image) => {
  // You can implement a lightbox here
  window.open(image.src, '_blank');
}
</script>