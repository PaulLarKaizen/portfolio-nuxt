
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

useHead({
  title: "Home | Cyril John Paul Larga",
});

useSeoMeta({
  title: "Cyril John Paul Larga | Portfolio",
  description:
    "An IT student exploring software development, cybersecurity, system defense, and resilient digital architectures.",
});

// SYSTEM_PROFILE.exe message cycle
const terminalMessages = [
  "initializing_profile...",
  "loading_technology_interests...",
  "mapping_learning_journey...",
  "updating_development_goals...",
  "building_digital_knowledge...",
  "system_status: continuously_learning",
];

const typedMessage = ref("");
const messageIndex = ref(0);
const isDeleting = ref(false);

let typingTimer: ReturnType<typeof setTimeout> | undefined;

function typeTerminalMessage() {
  const currentMessage = terminalMessages[messageIndex.value] ?? "";

  if (!isDeleting.value) {
    if (typedMessage.value.length < currentMessage.length) {
      typedMessage.value = currentMessage.slice(
        0,
        typedMessage.value.length + 1,
      );

      typingTimer = setTimeout(typeTerminalMessage, 42);
    } else {
      isDeleting.value = true;
      typingTimer = setTimeout(typeTerminalMessage, 1300);
    }
  } else {
    if (typedMessage.value.length > 0) {
      typedMessage.value = typedMessage.value.slice(0, -1);
      typingTimer = setTimeout(typeTerminalMessage, 19);
    } else {
      isDeleting.value = false;
      messageIndex.value =
        (messageIndex.value + 1) % terminalMessages.length;

      typingTimer = setTimeout(typeTerminalMessage, 350);
    }
  }
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (prefersReducedMotion.matches) {
    typedMessage.value = terminalMessages[0] ?? "";
    return;
  }

  typingTimer = setTimeout(typeTerminalMessage, 500);
});

onUnmounted(() => {
  if (typingTimer) {
    clearTimeout(typingTimer);
  }
});
</script>

<template>
  <div
    class="page-enter mx-auto flex max-w-6xl items-center lg:min-h-[calc(100svh-14rem)]"
  >
    <section
      class="grid w-full min-w-0 items-center gap-10 py-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-0"
    >
      <!-- LEFT: HERO INTRODUCTION -->
      <div class="min-w-0 space-y-5">
        <!-- Status -->
        <div
          class="inline-flex items-center gap-3 rounded-full border border-[#33ff00]/25 bg-[#33ff00]/5 px-4 py-2 font-mono text-xs tracking-[0.18em] text-[#33ff00]"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33ff00] opacity-60"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-[#33ff00]"
            ></span>
          </span>
          ACTIVE//
        </div>

        <!-- Main heading -->
        <div class="min-w-0 space-y-3">
          <p class="font-mono text-xs uppercase tracking-[0.35em] text-white/45">
            I'm
          </p>

          <h1
            class="w-full text-4xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
          >
            <ScrambleText text="Cyril John" />
            <ScrambleText
              text="Paul Larga"
              class="block whitespace-nowrap bg-gradient-to-r from-[#33ff00] via-[#8cff72] to-rose-500 bg-clip-text pb-2 text-transparent"
            />
          </h1>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <div
              class="h-[2px] w-10 shrink-0 bg-rose-500 shadow-[0_0_12px_rgba(255,0,60,0.8)]"
            ></div>

            <p class="font-mono text-xs tracking-[0.2em] text-rose-400 sm:text-sm">
              LEARN. BUILD. AND EVOLVE.
            </p>
          </div>
        </div>

        <!-- Description -->
        <p class="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          Exploring the world of
          <span class="font-semibold text-white">software development</span>,
          <span class="font-semibold text-white">cybersecurity</span>, and
          <span class="font-semibold text-white">Artificial Intelligence</span>.
          I'm continuously developing my skills, experimenting with technology,
          and learning how to build more reliable digital systems.
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap gap-3 pt-1">
          <NuxtLink
            to="/techstack"
            class="group inline-flex items-center gap-3 rounded-xl border border-[#33ff00]/50 bg-[#33ff00]/10 px-5 py-3 text-sm font-semibold text-[#33ff00] shadow-[0_0_18px_rgba(51,255,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00] hover:bg-[#33ff00]/15 hover:shadow-[0_0_25px_rgba(51,255,0,0.2)]"
          >
            Explore My Skills
            <span class="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/60 hover:text-rose-400 hover:shadow-[0_0_22px_rgba(255,0,60,0.12)]"
          >
            About Me
            <span>&#8599;</span>
          </NuxtLink>
        </div>
      </div>

      <!-- RIGHT: SYSTEM TERMINAL -->
      <div class="relative mx-auto w-full max-w-md">
        <!-- Background glow -->
        <div
          class="absolute -inset-6 rounded-full bg-[#33ff00]/5 blur-3xl"
        ></div>

        <div
          class="neon-panel terminal-shell relative rounded-2xl border border-[#33ff00]/20 bg-[#080d0b]/90 p-4 shadow-[0_0_35px_rgba(51,255,0,0.06),0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5"
        >
          <!-- Animated overlays -->
          <div class="terminal-scan" aria-hidden="true"></div>

          <!-- Terminal header -->
          <div
            class="terminal-content relative flex items-center justify-between border-b border-white/10 pb-3"
          >
            <div class="flex items-center gap-2">
              <span class="terminal-light terminal-light-red"></span>
              <span class="terminal-light terminal-light-yellow"></span>
              <span class="terminal-light terminal-light-green"></span>
            </div>

            <span class="font-mono text-[10px] tracking-[0.2em] text-white/45">
              SYSTEM_PROFILE.exe
            </span>
          </div>

          <!-- Terminal content -->
          <div class="terminal-content relative space-y-4 py-4 font-mono text-xs sm:text-sm">
            <!-- User profile -->
            <div>
              <p class="mb-2 text-[#33ff00]/70">// USER PROFILE</p>

              <p class="terminal-message min-h-[1.25rem] text-white/65">
                <span class="text-[#33ff00]">&gt;</span>
                {{ typedMessage }}
                <span class="terminal-cursor"></span>
              </p>

              <div class="space-y-1.5 pl-5 text-white/70">
                <p>
                  <span class="text-[#33ff00]">name:</span>
                  "Cyril Larga",
                </p>
                <p>
                  <span class="text-[#33ff00]">field:</span>
                  "Information Technology",
                </p>
                <p>
                  <span class="text-[#33ff00]">focus:</span>
                  "System Defense",
                </p>
                <p>
                  <span class="text-[#33ff00]">mindset:</span>
                  "Kaizen"
                </p>
              </div>

              <p class="text-white">};</p>
            </div>

            <!-- Interests -->
            <div class="border-t border-white/10 pt-4">
              <p class="mb-3 text-[#33ff00]/70">// CURRENT INTERESTS</p>

              <div class="space-y-3">
                <div>
                  <div class="mb-1.5 flex justify-between">
                    <span class="text-white/75">Software Development</span>
                    <span class="text-[#33ff00]">01</span>
                  </div>
                  <div class="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="terminal-progress-fill h-full w-[75%] rounded-full bg-[#33ff00] shadow-[0_0_10px_#33ff00]"
                    ></div>
                  </div>
                </div>

                <div>
                  <div class="mb-1.5 flex justify-between">
                    <span class="text-white/75">Cybersecurity</span>
                    <span class="text-rose-400">02</span>
                  </div>
                  <div class="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="terminal-progress-fill terminal-progress-red h-full w-[60%] rounded-full bg-rose-500 shadow-[0_0_10px_#ff003c]"
                    ></div>
                  </div>
                </div>

                <div>
                  <div class="mb-1.5 flex justify-between">
                    <span class="text-white/75">Technology Systems</span>
                    <span class="text-[#33ff00]">03</span>
                  </div>
                  <div class="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="terminal-progress-fill h-full w-[85%] rounded-full bg-[#33ff00] shadow-[0_0_10px_#33ff00]"
                    ></div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[11px] text-white/45">
                <span class="text-[#33ff00]">&gt;</span>
                status: Kaizen
                <span class="terminal-cursor ml-1"></span>
              </p>
            </div>
          </div>

          <!-- Terminal footer -->
          <div
            class="terminal-content relative flex items-center justify-between border-t border-white/10 pt-3 text-[10px] tracking-widest text-white/40"
          >
            <span>SECURE CONNECTION</span>
            <span class="terminal-online">ONLINE</span>
          </div>
        </div>

        <!-- Floating decorative label -->
        <div
          class="absolute -bottom-4 -left-3 rounded-lg border border-rose-500/30 bg-[#10090c] px-3 py-2 font-mono text-[10px] text-rose-400 shadow-[0_0_20px_rgba(255,0,60,0.12)] sm:-left-6"
        >
          <span class="mr-2">&#10022;</span>
          SYSTEMS THINKER
        </div>
      </div>
    </section>
  </div>
</template>
