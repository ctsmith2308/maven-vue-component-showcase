<script setup lang="ts">
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent} from 'maven-vue-lib';
import { toHtmlHighlight } from '@/utils';

const heading = 'Multiple';
const description = `Set multiple to allow several panels open at once. Mark a tab disabled to prevent it from being toggled.`;
const htmlString = toHtmlHighlight(description, 'multiple');
const codeSnippet = `<Accordion :tabs="tabs" :multiple="true" :active-index="[0, 1]" />`;
</script>

<template>
  <DocsExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Accordion multiple value="1">
      <AccordionPanel value="1">
        <AccordionHeader>What is a component library?</AccordionHeader>
        <AccordionContent>
          <p class="text-sm">A component library is a collection of reusable UI components that can be used across projects to maintain consistency and speed up development.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>How do I install this library?</AccordionHeader>
        <AccordionContent>
          <p class="text-sm">Install via npm: <code>npm install @your-org/blocks</code>, then import individual components as needed.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>Is TypeScript supported?</AccordionHeader>
        <AccordionContent>
          <p class="text-sm">Yes, all components are written in TypeScript and ship with full type definitions.</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </DocsExampleSection>
</template>
