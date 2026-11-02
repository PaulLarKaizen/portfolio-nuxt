
<script setup lang="ts">
import {
  siHtml5,
  siCss,
  siJavascript,
  siPython,
  siPostgresql,
  siMongodb,
  siGit,
  siGithub,
  siAndroidstudio,
} from 'simple-icons'

const props = defineProps<{
  name: string
}>()

const icons = {
  HTML5: siHtml5,
  CSS3: siCss,
  JavaScript: siJavascript,
  Python: siPython,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Git: siGit,
  GitHub: siGithub,
  'Android Studio': siAndroidstudio,
}

const icon = computed(() => icons[props.name as keyof typeof icons])
</script>

<template>
  <svg
    v-if="icon"
    role="img"
    :aria-label="name"
    viewBox="0 0 24 24"
    class="h-10 w-10 shrink-0"
    fill="currentColor"
  >
    <path :d="icon.path" />
  </svg>

  <span
    v-else
    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#33ff00]/30 font-mono text-[10px] font-black text-[#33ff00]"
    :aria-label="name"
  >
    {{ name === 'VS Code' ? 'VS' : name }}
  </span>
</template>
