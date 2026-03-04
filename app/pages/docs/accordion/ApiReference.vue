<script setup lang="ts">
import type { AccordionProps, DataTableColumn } from 'maven-vue-lib';

import type { ApiTableRow } from '~/components/docs/types';

// import { toHtmlHighlight } from '@/utils';

const description = `Accordion renders collapsible panels. Toggle each panel individually or allow multiple open at once.`;

// const htmlString = toHtmlHighlight(description, 'Accordion');

const data = [
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Allows multiple panels to be open simultaneously.' },
  { name: 'value', type: 'string | string[]', default: 'undefined', description: 'Current opened value of accordion' },
] satisfies ApiTableRow<AccordionProps>;

const columns: DataTableColumn[] = [
  { field: 'name', header: 'Name' },
  { field: 'type', header: 'Type' },
  { field: 'default', header: 'Default' },
  { field: 'description', header: 'Description' },
];

const apiTableData =  { data, columns };
</script>

<template>
  <DocsApiSection :description="description" :api-table-data="apiTableData" />
</template>
