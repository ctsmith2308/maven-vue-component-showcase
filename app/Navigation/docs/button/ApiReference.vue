<script setup lang="ts">
import { DocumentApiSection } from '@/compositions/document';
import { apiReferenceConfig } from './config';
import { toHtmlHighlight } from '@/lib/utils';

const description = `Button wraps the native button element with color, size, variant, and state props.`;

const htmlString = toHtmlHighlight(description, 'Button');
</script>

<template>
  <DocumentApiSection :description="htmlString" :apiTableData="apiReferenceConfig" />
</template>
