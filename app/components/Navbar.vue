<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tech Stack", path: "/techstack" },
  { label: "Certifications", path: "/certifications" },
];

const route = useRoute();

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header class="fixed top-5 left-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2">
    <nav
      class="navbar flex-col items-stretch border border-white/25 bg-[linear-gradient(135deg,rgba(51,255,0,0.12),rgba(255,255,255,0.06)_45%,rgba(255,0,85,0.1)),rgba(10,15,15,0.75)] px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_0_24px_rgba(51,255,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-rose-500/70 hover:shadow-[0_12px_34px_rgba(0,0,0,0.42),0_0_20px_rgba(255,0,85,0.25)] md:clip-path-[polygon(5%_0%,95%_0%,100%_50%,95%_100%,5%_100%,0%_50%)] md:px-10"
    >
      <div class="flex w-full items-center justify-between">
        <!-- Portfolio brand -->
        <NuxtLink
          to="/"
          class="font-mono text-sm font-black tracking-widest text-[#33ff00] drop-shadow-[0_0_8px_rgba(51,255,0,0.4)]"
          @click="closeMenu"
        >
          CJPL<span class="text-rose-500">.</span>
        </NuxtLink>

        <!-- Desktop navigation -->
        <ul class="hidden items-center gap-8 md:flex">
          <li v-for="link in links" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="text-[0.7rem] font-bold uppercase tracking-wider text-[#33ff00] transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(51,255,0,0.8)]"
              :class="
                route.path === link.path
                  ? 'text-white drop-shadow-[0_0_10px_rgba(51,255,0,0.8)]'
                  : ''
              "
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button
          class="btn btn-ghost btn-sm border border-[#33ff00]/30 text-[#33ff00] hover:bg-[#33ff00]/10 hover:text-white md:hidden"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          {{ isMenuOpen ? "CLOSE" : "MENU" }}
        </button>
      </div>

      <!-- Mobile navigation -->
      <ul
        v-if="isMenuOpen"
        class="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden"
      >
        <li v-for="link in links" :key="link.path">
          <NuxtLink
            :to="link.path"
            class="block text-xs font-bold uppercase tracking-widest text-[#33ff00] transition-colors hover:text-white"
            :class="route.path === link.path ? 'text-white' : ''"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
