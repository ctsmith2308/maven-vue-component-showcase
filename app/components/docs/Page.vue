<script setup lang="ts">
import type { DocSection } from './types';
import { Heading, Text } from 'maven-vue-lib';
import { useScrollToSection } from '@/composables';

defineProps<{
  docSections: DocSection[];
}>();

const { scrollToSection } = useScrollToSection({ updateUrl: true });
</script>

<template>
  <div class="flex flex-row w-full min-w-0">
    <div class="flex-1 flex flex-col min-w-0 gap-10 p-5 bg-page">
      <component :is="section.component" v-for="section in docSections" :id="section.id" :key="section.id"  />
    </div>

    <div class="w-1/6 hidden md:block bg-page">
      <div class="flex flex-col pt-5 justify-start gap-2 bg-page">
        <Heading :size="4">Content</Heading>

        <ul>
          <li
            v-for="section in docSections"
            :key="section.id"
            class="cursor-pointer"
            @click="scrollToSection(section.id)"
          >
            <Text>{{ section.label }}</Text>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
