<script setup lang="ts">
import DocumentIcon from "./icons/document-icon.vue";
</script>

<template>
  <div class="navbar bg-base-100 mb-8">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost text-xl">Web PedalBoard</NuxtLink>
    </div>
    <div class="flex-none">
      <label for="my-drawer-4" class="btn btn-square btn-ghost">
        <DocumentIcon />
      </label>
    </div>
  </div>

  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><NuxtLink to="/documents/gain">Gain</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
