<template>
  <footer class="bg-white border-t">
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center">
        <div class="text-gray-600">
          © {{ new Date().getFullYear() }} My Blog. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <a href="https://github.com" target="_blank" class="text-gray-600 hover:text-gray-900">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" class="text-gray-600 hover:text-gray-900">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>