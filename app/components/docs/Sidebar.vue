<script setup lang="ts">
import { NAV_GROUPS } from '~/config/navigation'
</script>

<template>
  <nav class="flex flex-col gap-4 md:p-5 overflow-y-auto">
    <!-- Outer loop for Categories -->
    <div v-for="group in NAV_GROUPS" :key="group.category" class="flex flex-col gap-2">
      <h3 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
        {{ group.category }}
      </h3>
      
      <ul class="flex flex-col list-none p-0 m-0 pl-2 gap-2">
        <!-- Inner loop for Links -->
        <li v-for="link in group.items" :key="link.to">
          <NuxtLink 
            :to="link.to"
            class="block px-2 py-1 rounded hover:bg-gray-100 transition-colors"
            active-class="text-blue-600 font-medium bg-blue-50"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
