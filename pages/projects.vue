<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Projects</h1>
    <div class="grid gap-8 md:grid-cols-2">
      <div v-for="project in projects" :key="project.title" class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <div class="flex space-x-4">
          <a :href="project.github" target="_blank" class="text-blue-600 hover:text-blue-800">
            GitHub →
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="text-blue-600 hover:text-blue-800">
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Project 1',
    description: 'A description of your first project',
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project 2',
    description: 'A description of your second project',
    github: 'https://github.com/username/project2',
    demo: 'https://project2-demo.com'
  }
]
</script>