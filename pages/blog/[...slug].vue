<template>
  <article class="max-w-4xl mx-auto">
    <ContentDoc v-slot="{ doc }">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ doc.title }}</h1>
        <div class="flex items-center text-gray-600">
          <time>{{ new Date(doc.date).toLocaleDateString() }}</time>
          <span class="mx-2">•</span>
          <span>{{ doc.readingTime }} min read</span>
        </div>
      </div>
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>