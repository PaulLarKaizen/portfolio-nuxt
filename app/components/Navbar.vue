
<script setup lang="ts">
const isMenuOpen = useState<boolean>("mobile-navbar-open", () => false);
const isSidebarOpen = useState<boolean>("profile-sidebar-open", () => false);

const links = [
  { label: "Home", path: "/", number: "" },
  { label: "About", path: "/about", number: "" },
  { label: "Tech Stack", path: "/techstack", number: "" },
  { label: "Certifications", path: "/certifications", number: "" },
];

const route = useRoute();

function toggleMenu() {
  if (isMenuOpen.value) {
    closeMenu();
    return;
  }

  // Close the Sidebar before opening the Navbar.
  if (isSidebarOpen.value) {
    isSidebarOpen.value = false;
    document.body.style.overflow = "";
  }

  isMenuOpen.value = true;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header
    class="fixed left-1/2 top-5 z-50 w-[95%] max-w-4xl -translate-x-1/2"
  >
    <!-- MAIN NAVBAR -->
    <nav
      class="navbar flex items-center justify-between rounded-2xl border border-[#33ff00]/40 bg-[linear-gradient(135deg,rgba(51,255,0,0.14),rgba(255,255,255,0.06)_45%,rgba(255,0,85,0.07)),rgba(5,12,8,0.88)] px-4 py-3 shadow-[0_0_15px_rgba(51,255,0,0.16),0_0_35px_rgba(51,255,0,0.10),0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-[#33ff00]/80 hover:shadow-[0_0_18px_rgba(51,255,0,0.38),0_0_45px_rgba(51,255,0,0.22),0_12px_35px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(51,255,0,0.08)] sm:px-6 md:px-10"
    >
      <div class="flex w-full items-center justify-between gap-3">

        <!-- PERSONAL BRAND -->
        <NuxtLink
          to="/"
          aria-label="CJPL Digital Portfolio - Home"
          class="group flex shrink-0 items-center gap-2.5"
          @click="closeMenu"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/60 bg-rose-500/5 shadow-[0_0_12px_rgba(255,0,60,0.12),inset_0_0_12px_rgba(255,0,60,0.06)] transition-all duration-300 group-hover:border-rose-400 group-hover:bg-rose-500/10 group-hover:shadow-[0_0_18px_rgba(255,0,60,0.4)]"
          >
            <span
              class="font-mono text-lg font-black tracking-tighter text-[#33ff00] transition-all duration-300 group-hover:text-white"
            >
              C<span class="text-rose-500">.</span>
            </span>
          </div>

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
          aria-controls="mobile-navigation"
          @click="toggleMenu"
        >
          {{ isMenuOpen ? "CLOSE" : "MENU" }}
        </button>
      </div>
    </nav>

    <!-- ANIMATED MOBILE BUTTON PANEL -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="translate-y-3 scale-[0.96] opacity-0 blur-sm"
      enter-to-class="translate-y-0 scale-100 opacity-100 blur-0"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="translate-y-0 scale-100 opacity-100 blur-0"
      leave-to-class="translate-y-2 scale-[0.97] opacity-0 blur-sm"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="absolute right-0 top-[calc(100%+0.65rem)] z-[55] w-64 overflow-hidden rounded-2xl border border-[#33ff00]/35 bg-[#07100b]/95 p-3 shadow-[0_0_25px_rgba(51,255,0,0.16),0_15px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden"
      >
        <!-- PANEL HEADER -->
        <div class="mb-3 flex items-center justify-between border-b border-[#33ff00]/15 px-2 pb-3">
          <div class="flex flex-col gap-1">
            <span class="font-mono text-[0.55rem] font-bold tracking-[0.25em] text-white/35">
             
            </span>
            <span class="font-mono text-xs font-bold tracking-widest text-[#33ff00]">
              SELECT MODULE
            </span>
          </div>

          <span class="h-2 w-2 animate-pulse rounded-full bg-[#33ff00] shadow-[0_0_10px_#33ff00]"></span>
        </div>

        <!-- NAVIGATION BUTTONS -->
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 active:scale-[0.97]"
            :class="
              route.path === link.path
                ? 'border-[#33ff00]/70 bg-[#33ff00]/10 shadow-[0_0_14px_rgba(51,255,0,0.12),inset_0_0_12px_rgba(51,255,0,0.05)]'
                : 'border-white/10 bg-white/[0.025] hover:border-[#33ff00]/50 hover:bg-[#33ff00]/[0.07] hover:shadow-[0_0_15px_rgba(51,255,0,0.10)]'
            "
            @click="closeMenu"
          >
            <span
              class="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[#33ff00] transition-all duration-300"
              :class="
                route.path === link.path
                  ? 'opacity-100 shadow-[0_0_10px_#33ff00]'
                  : 'opacity-0 group-hover:opacity-100'
              "
            ></span>

            <span
              class="font-mono text-[0.6rem] font-bold tracking-wider transition-colors duration-300"
              :class="
                route.path === link.path
                  ? 'text-rose-500'
                  : 'text-white/25 group-hover:text-rose-400'
              "
            >
              {{ link.number }}
            </span>

            <span
              class="flex-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.13em] transition-all duration-300"
              :class="
                route.path === link.path
                  ? 'translate-x-1 text-white'
                  : 'text-[#33ff00]/80 group-hover:translate-x-1 group-hover:text-white'
              "
            >
              {{ link.label }}
            </span>

            <span
              class="font-mono text-sm transition-all duration-300"
              :class="
                route.path === link.path
                  ? 'translate-x-0 text-rose-500 opacity-100'
                  : '-translate-x-1 text-[#33ff00] opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              "
            >
              →
            </span>
          </NuxtLink>
        </div>

        <!-- PANEL FOOTER -->
        <div class="mt-3 flex items-center justify-between border-t border-[#33ff00]/15 px-2 pt-3">
          <span class="font-mono text-[0.5rem] tracking-widest text-white/25">
            
          </span>
          <span class="font-mono text-[0.5rem] tracking-widest text-[#33ff00]/50">
            Select
          </span>
        </div>
      </div>
    </Transition>
  </header>
</template>
