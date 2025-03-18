<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Blog Posts</h1>
    <div class="grid gap-8">
      <ContentList path="/blog" v-slot="{ list }">
        <article v-for="post in list" :key="post._path" class="bg-white p-6 rounded-lg shadow-md">
          <NuxtLink :to="post._path">
            <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
            <p class="text-gray-600 mb-4">{{ post.description }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <span>{{ new Date(post.date).toLocaleDateString() }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.readingTime }} min read</span>
            </div>
          </NuxtLink>
        </article>
      </ContentList>
    </div>
  </div>
</template>