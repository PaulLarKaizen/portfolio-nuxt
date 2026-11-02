<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div>
    <h1>Oops! Something went wrong.</h1>

    <p>
      The page you are looking for could not be found.
    </p>

    <button @click="clearError({ redirect: '/' })">
      Go back home
    </button>
  </div>
</template>