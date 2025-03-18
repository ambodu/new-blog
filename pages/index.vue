<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold">Latest Posts</h1>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ContentList path="/blog" v-slot="{ list }">
        <article v-for="post in list" :key="post._path" class="bg-white rounded-lg shadow-md overflow-hidden">
          <NuxtLink :to="post._path">
            <img v-if="post.cover" :src="post.cover" :alt="post.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
              <p class="text-gray-600">{{ post.description }}</p>
              <div class="mt-4 text-sm text-gray-500">
                {{ new Date(post.date).toLocaleDateString() }}
              </div>
            </div>
          </NuxtLink>
        </article>
      </ContentList>
    </div>
  </div>
</template>