
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
  <header
    class="fixed left-1/2 top-5 z-50 w-[95%] max-w-4xl -translate-x-1/2"
  >
    <nav
      class="navbar flex-col items-stretch rounded-2xl border border-[#33ff00]/40 bg-[linear-gradient(135deg,rgba(51,255,0,0.14),rgba(255,255,255,0.06)_45%,rgba(255,0,85,0.07)),rgba(5,12,8,0.88)] px-4 py-3 shadow-[0_0_15px_rgba(51,255,0,0.16),0_0_35px_rgba(51,255,0,0.10),0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-[#33ff00]/80 hover:shadow-[0_0_18px_rgba(51,255,0,0.38),0_0_45px_rgba(51,255,0,0.22),0_12px_35px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(51,255,0,0.08)] sm:px-6 md:px-10"
    >
      <div class="flex w-full items-center justify-between gap-3">

        <!-- PERSONAL BRAND -->
        <NuxtLink
          to="/"
          aria-label="CJPL Digital Portfolio - Home"
          class="group flex shrink-0 items-center gap-2.5"
          @click="closeMenu"
        >
          <!-- Logo emblem -->
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/60 bg-rose-500/5 shadow-[0_0_12px_rgba(255,0,60,0.12),inset_0_0_12px_rgba(255,0,60,0.06)] transition-all duration-300 group-hover:border-rose-400 group-hover:bg-rose-500/10 group-hover:shadow-[0_0_18px_rgba(255,0,60,0.4)]"
          >
            <span
              class="font-mono text-lg font-black tracking-tighter text-[#33ff00] transition-all duration-300 group-hover:text-white"
            >
              C<span class="text-rose-500">.</span>
            </span>
          </div>

          <!-- Wordmark -->
          <div class="flex flex-col justify-center gap-0">
            <span
              class="font-mono text-lg font-black leading-none tracking-[0.16em] text-[#33ff00] drop-shadow-[0_0_8px_rgba(51,255,0,0.45)] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(51,255,0,0.85)] sm:text-xl"
            >
              CJPL<span class="text-rose-500"></span>
            </span>

            <span
              class="mt-1 font-mono text-[0.48rem] font-bold tracking-[0.19em] text-white/40 transition-colors duration-300 group-hover:text-rose-400 sm:text-[0.52rem]"
            >
              DIGITAL PORTFOLIO
            </span>
          </div>
        </NuxtLink>

        <!-- DESKTOP NAVIGATION -->
        <ul class="hidden items-center gap-8 md:flex">
          <li v-for="link in links" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="relative py-2 text-[0.7rem] font-bold uppercase tracking-wider text-[#33ff00] transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_12px_rgba(51,255,0,1)]"
              :class="
                route.path === link.path
                  ? 'text-white drop-shadow-[0_0_12px_rgba(51,255,0,1)]'
                  : ''
              "
            >
              {{ link.label }}

              <!-- Active indicator -->
              <span
                class="absolute -bottom-1 left-0 h-[2px] rounded-full bg-rose-500 shadow-[0_0_8px_rgba(255,0,60,0.8)] transition-all duration-300"
                :class="
                  route.path === link.path
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0'
                "
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- MOBILE MENU BUTTON -->
        <button
          class="btn btn-ghost btn-sm shrink-0 rounded-xl border border-[#33ff00]/40 px-3 font-mono text-[0.65rem] tracking-widest text-[#33ff00] shadow-[0_0_10px_rgba(51,255,0,0.12)] transition-all duration-300 hover:border-[#33ff00] hover:bg-[#33ff00]/10 hover:text-white hover:shadow-[0_0_18px_rgba(51,255,0,0.35)] md:hidden"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          {{ isMenuOpen ? "CLOSE" : "MENU" }}
        </button>
      </div>

      <!-- MOBILE NAVIGATION -->
      <ul
        v-if="isMenuOpen"
        class="mt-4 flex w-full flex-col items-stretch gap-4 rounded-xl border-t border-[#33ff00]/20 pt-4 md:hidden"
      >
        <li v-for="link in links" :key="link.path">
          <NuxtLink
            :to="link.path"
            class="block w-full rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#33ff00] transition-all duration-300 hover:bg-[#33ff00]/10 hover:text-white hover:drop-shadow-[0_0_10px_rgba(51,255,0,0.8)]"
            :class="
              route.path === link.path
                ? 'bg-[#33ff00]/10 text-white drop-shadow-[0_0_10px_rgba(51,255,0,0.8)]'
                : ''
            "
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
