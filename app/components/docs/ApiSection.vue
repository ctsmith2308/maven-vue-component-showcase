<script setup lang="ts">
import type { ApiSectionProps } from './types';
import { Heading, DataTable } from 'maven-vue-lib';


withDefaults(defineProps<ApiSectionProps>(), {
  heading: 'Api Reference',
});

const onRowClick = () => {
  console.log('clicked');
};
</script>

<template>
  <section class="flex flex-col gap-5 bg-page">
    <Heading :size="3">
      {{ heading }}
    </Heading>

    <p class="text-content-text-secondary text-body-md" v-html="description" />

    <DataTable :data="apiTableData.data" :columns="apiTableData.columns" @rowClick="onRowClick" />
  </section>
</template>
