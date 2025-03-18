<template>
  <div class="max-w-4xl mx-auto">
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p class="text-xl text-gray-600">Exploring technology, development, and more.</p>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6">Latest Posts</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <ContentList path="/blog" v-slot="{ list }">
          <article v-for="post in list" :key="post._path" class="bg-white p-6 rounded-lg shadow-md">
            <NuxtLink :to="post._path">
              <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <div class="text-sm text-gray-500">
                {{ new Date(post.date).toLocaleDateString() }}
              </div>
            </NuxtLink>
          </article>
        </ContentList>
      </div>
    </section>
  </div>
</template>