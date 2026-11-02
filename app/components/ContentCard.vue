
<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section
    class="card relative overflow-hidden rounded-2xl border border-[#33ff00]/20 bg-[#0a100d]/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#33ff00]/50 hover:shadow-[0_0_25px_rgba(51,255,0,0.08)] md:p-8"
  >
    <!-- Decorative green accent -->
    <div class="absolute left-0 top-0 h-full w-1 bg-[#33ff00]/60"></div>

    <div class="mb-6">
      <p
        class="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#33ff00]/60"
      >
        {{ subtitle || "SYSTEM MODULE" }}
      </p>

      <h2 class="text-2xl font-black tracking-wide text-white md:text-3xl">
        {{ title }}
      </h2>
    </div>

    <!-- Content supplied by each page -->
    <div class="text-sm leading-7 text-white/70 md:text-base">
      <slot />
    </div>
  </section>
</template>