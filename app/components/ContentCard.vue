
<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section
    class="neon-card card relative rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:p-8"
  >
    <!-- Decorative accent -->
    <div
      class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#33ff00] to-rose-500/70 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
    ></div>

    <div class="relative">
      <div class="mb-6">
        <p
          class="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#33ff00]/70 transition-colors duration-300"
        >
          {{ subtitle || "SYSTEM MODULE" }}
        </p>

        <h2
          class="text-2xl font-black tracking-wide text-white transition-colors duration-300 hover:text-rose-400 md:text-3xl"
        >
          {{ title }}
        </h2>
      </div>

      <!-- Content supplied by each page -->
      <div class="text-sm leading-7 text-white/70 md:text-base">
        <slot />
      </div>
    </div>
  </section>
</template>
