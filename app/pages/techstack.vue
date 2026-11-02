
<script setup lang="ts">
useHead({
  title: 'Tech Stack | Cyril John Paul Larga',
})

useSeoMeta({
  title: 'Tech Stack | Cyril John Paul Larga',
  description:
    'Technologies and development tools included in my IT portfolio.',
})

const categories = [
  {
    number: '01',
    title: 'FRONTEND',
    description: 'Web structure and interface development.',
    items: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    number: '02',
    title: 'BACKEND & DATA',
    description: 'Programming languages and database technologies.',
    items: ['Java', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    number: '03',
    title: 'DEVELOPMENT TOOLS',
    description: 'Tools used in development and version control.',
    items: ['VS Code', 'Git', 'GitHub', 'Android Studio'],
  },
]
</script>

<template>
  <div class="mx-auto max-w-5xl space-y-8">
    <section class="rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-8 md:p-12">
      <p class="mb-4 font-mono text-xs tracking-[0.3em] text-[#33ff00]">
        TECHNOLOGIES
      </p>

      <h1 class="text-4xl font-black tracking-tight text-white md:text-6xl">
        MY TECH
        <span class="text-[#33ff00]">STACK.</span>
      </h1>

      <p class="mt-6 max-w-2xl leading-8 text-white/65">
        Technologies and development tools included in my learning
        journey in Information Technology.
      </p>

      <div class="mt-8 flex items-center gap-3">
        <span class="h-px w-12 bg-[#33ff00]"></span>
        <span class="font-mono text-xs tracking-widest text-[#33ff00]/70">
          INVENTORY
        </span>
      </div>
    </section>

    <div class="grid gap-6 md:grid-cols-2">
      <section
        v-for="category in categories"
        :key="category.number"
        class="group rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/50 hover:shadow-[0_0_25px_rgba(51,255,0,0.08)]"
      >
        <div class="mb-6 flex items-start justify-between">
          <div>
            <p class="font-mono text-xs tracking-[0.25em] text-[#33ff00]/60">
          
            </p>

            <h2 class="mt-3 text-xl font-black text-white">
              {{ category.title }}
            </h2>
          </div>

          <span class="font-mono text-2xl font-black text-[#33ff00]/30">
            {{ category.number }}
          </span>
        </div>

        <p class="mb-6 text-sm leading-7 text-white/55">
          {{ category.description }}
        </p>

        
<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
  <div
    v-for="item in category.items"
    :key="item"
    class="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-[#33ff00]/20 bg-[#33ff00]/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/60 hover:bg-[#33ff00]/10"
  >
    <TechIcon :name="item" />

    <span class="text-center text-xs font-semibold text-white/80">
      {{ item }}
    </span>
  </div>
</div>
        <div class="mt-8 h-px w-full bg-gradient-to-r from-[#33ff00]/40 to-transparent"></div>
      </section>
    </div>
  </div>
</template>
