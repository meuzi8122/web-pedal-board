<script setup lang="ts">
const route = useRoute();
const document = await queryContent(route.path).findOne();
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc: document }">
      <h1>{{ document.title }}</h1>
      <ContentRenderer :value="document" />
    </ContentDoc>
  </article>
</template>
