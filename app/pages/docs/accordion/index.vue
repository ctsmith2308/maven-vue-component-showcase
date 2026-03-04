<script setup lang="ts">
import type { DocSection } from '~/components/docs/types';

import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import MultipleExample from './MultipleExample.vue';

const docSections: DocSection[] = [
  { id: 'accordion-api', label: 'API Reference', component: ApiReference },
  { id: 'accordion-basic', label: 'Basic', component: BasicExample },
  { id: 'accordion-multiple', label: 'Multiple', component: MultipleExample },
];

</script>

<template>
  <DocsPage :doc-sections="docSections" />
</template>
