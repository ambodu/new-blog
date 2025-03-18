<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-xl font-bold text-gray-900">My Blog</span>
            </NuxtLink>
          </div>
          <div class="flex space-x-8">
            <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 text-gray-900">Blog</NuxtLink>
            <NuxtLink to="/gallery" class="inline-flex items-center px-1 pt-1 text-gray-900">Gallery</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>

    <footer class="bg-white mt-12">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500">© {{ new Date().getFullYear() }} My Blog. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>