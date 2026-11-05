
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
    class="hero-page relative isolate mx-auto flex max-w-6xl items-center lg:min-h-[calc(100svh-14rem)]"
  >
    <!-- BACKGROUND ATMOSPHERE -->
    <div
      class="hero-atmosphere pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div class="hero-grid absolute inset-0"></div>
      <div class="hero-glow hero-glow-green"></div>
      <div class="hero-glow hero-glow-red"></div>
      <div class="hero-orbit hero-orbit-one"></div>
      <div class="hero-orbit hero-orbit-two"></div>
    </div>

    <section
      class="relative grid w-full min-w-0 items-center gap-12 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-0"
    >
      <!-- LEFT: INTRODUCTION -->
      <div class="hero-intro relative min-w-0 space-y-6">

        <!-- ONLINE STATUS -->
        <div
          class="hero-status inline-flex items-center gap-3 rounded-full border border-[#33ff00]/25 bg-[#33ff00]/5 px-4 py-2 font-mono text-xs tracking-[0.18em] text-[#33ff00]"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#33ff00] opacity-60"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-[#33ff00]"
            ></span>
          </span>

          ONLINE

          <span class="h-3 w-px bg-[#33ff00]/30"></span>
          <span class="text-white/40"></span>
        </div>

        <!-- NAME SECTION -->
        <div class="min-w-0 space-y-4">

          <!-- BINARY LABEL -->
          <div class="flex items-center gap-3">
            <span
              class="h-[2px] w-8 rounded-full bg-[#33ff00] shadow-[0_0_10px_rgba(51,255,0,0.8)]"
            ></span>

            <span
              class="font-mono text-[10px] tracking-[0.25em] text-[#33ff00]/60"
            >
              110100101111101010101011110101010101010
            </span>
          </div>

          <!-- NAME -->
          <div class="hero-name-wrap relative">
            <h1
              aria-label="Cyril John Paul Larga"
              class="hero-name relative w-full min-w-0"
            >
              <span class="name-first">
                <ScrambleText text="Cyril John" />
              </span>

              <span class="name-second">
                <span>
                  <ScrambleText text="Paul" />
                </span>

                <span>
                  <ScrambleText text="Larga" />
                </span>
              </span>
            </h1>

            <!-- NEON UNDERLINE -->
            <div
              class="name-underline mt-6 flex h-[3px] w-full max-w-[21rem] overflow-hidden rounded-full"
            >
              <span class="underline-main"></span>
              <span class="underline-light"></span>
            </div>

            <!-- CORNER DETAIL -->
            <div class="name-corner" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>

          <!-- PERSONAL MOTTO -->
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <p
              class="font-mono text-xs font-semibold tracking-[0.2em] text-[#33ff00] sm:text-sm"
            >
              LEARN. BUILD. AND EVOLVE.
            </p>

            <span class="h-1 w-1 rounded-full bg-white/30"></span>

            <span
              class="font-mono text-[10px] tracking-widest text-white/35"
            ></span>
          </div>
        </div>

        <!-- DESCRIPTION -->
        <p class="max-w-xl text-sm leading-7 text-white/65 sm:text-base">
          Exploring the world of
          <span class="font-semibold text-white">software development</span>,
          <span class="font-semibold text-white">cybersecurity</span>, and
          <span class="font-semibold text-white">Artificial Intelligence</span>.
          I'm continuously developing my skills, experimenting with technology,
          and learning how to build more reliable digital systems.
        </p>

        <!-- ACTION BUTTONS -->
        <div class="flex flex-wrap gap-3 pt-1">
          <NuxtLink
            to="/techstack"
            class="group inline-flex items-center gap-3 rounded-xl border border-[#33ff00]/50 bg-[#33ff00]/10 px-5 py-3 text-sm font-semibold text-[#33ff00] shadow-[0_0_18px_rgba(51,255,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00] hover:bg-[#33ff00]/15 hover:shadow-[0_0_25px_rgba(51,255,0,0.2)]"
          >
            Explore My Skills

            <span
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/60 hover:text-[#33ff00] hover:shadow-[0_0_22px_rgba(51,255,0,0.12)]"
          >
            About Me
            <span>&#8599;</span>
          </NuxtLink>
        </div>

        <!-- SYSTEM FOOTER -->
        <div
          class="flex items-center gap-3 pt-3 font-mono text-[9px] tracking-[0.2em] text-white/25"
        ></div>
      </div>

      <!-- RIGHT: TERMINAL -->
      <div class="terminal-stage relative mx-auto w-full max-w-md">

        <div
          class="absolute -inset-8 rounded-full bg-[#33ff00]/5 blur-3xl"
        ></div>

        <div class="terminal-orbit terminal-orbit-green"></div>
        <div class="terminal-orbit terminal-orbit-red"></div>

        <!-- TERMINAL PANEL -->
        <div
          class="neon-panel terminal-shell relative overflow-hidden rounded-2xl border border-[#33ff00]/25 bg-[#080d0b]/95 p-4 shadow-[0_0_35px_rgba(51,255,0,0.08),0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5"
        >
          <div class="terminal-scan" aria-hidden="true"></div>
          <div class="terminal-border-glow" aria-hidden="true"></div>

          <!-- TERMINAL HEADER -->
          <div
            class="terminal-content relative flex items-center justify-between border-b border-white/10 pb-3"
          >
            <div class="flex items-center gap-2">
              <span class="terminal-light terminal-light-red"></span>
              <span class="terminal-light terminal-light-yellow"></span>
              <span class="terminal-light terminal-light-green"></span>
            </div>

            <span
              class="font-mono text-[10px] tracking-[0.2em] text-white/45"
            >
              SYSTEM PROFILE
            </span>

            <span class="font-mono text-[9px] text-[#33ff00]/60">
              v1.0
            </span>
          </div>

          <!-- TERMINAL CONTENT -->
          <div
            class="terminal-content relative space-y-4 py-4 font-mono text-xs sm:text-sm"
          >
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

            <!-- CURRENT INTERESTS -->
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
                    <span class="text-[#33ff00]">02</span>
                  </div>

                  <div class="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="terminal-progress-fill terminal-progress-red h-full w-[60%] rounded-full bg-[#33ff00] shadow-[0_0_10px_#33ff00]"
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

          <!-- TERMINAL FOOTER -->
          <div
            class="terminal-content relative flex items-center justify-between border-t border-white/10 pt-3 text-[10px] tracking-widest text-white/40"
          >
            <span>SECURE CONNECTION</span>
            <span class="terminal-online">ONLINE</span>
          </div>
        </div>

        <!-- FLOATING LABEL -->
        <div
          class="terminal-floating-label absolute -bottom-4 -left-3 rounded-lg border border-[#33ff00]/30 bg-[#080d0b] px-3 py-2 font-mono text-[10px] text-[#33ff00] shadow-[0_0_20px_rgba(51,255,0,0.12)] sm:-left-6"
        >
          <span class="mr-2">&#10022;</span>
          SYSTEMS THINKER
        </div>

        <!-- LIVE INDICATOR -->
        <div
          class="absolute -right-2 -top-4 font-mono text-[9px] tracking-widest text-[#33ff00]/50 sm:-right-5"
        >
          <span class="animate-pulse">●</span>
          LIVE MONITORING
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ========================================
   HERO BACKGROUND
======================================== */

.hero-page {
  isolation: isolate;
}

.hero-grid {
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(51, 255, 0, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(51, 255, 0, 0.055) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
  animation: grid-drift 25s linear infinite;
}

.hero-glow {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 9999px;
  filter: blur(100px);
  pointer-events: none;
}

.hero-glow-green {
  top: 5%;
  left: -12%;
  background: rgba(51, 255, 0, 0.08);
  animation: glow-float 9s ease-in-out infinite alternate;
}

.hero-glow-red {
  right: -12%;
  bottom: 5%;
  background: rgba(51, 255, 0, 0.045);
  animation: glow-float 11s ease-in-out infinite alternate-reverse;
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(51, 255, 0, 0.08);
  border-radius: 50%;
  pointer-events: none;
}

.hero-orbit-one {
  width: 300px;
  height: 300px;
  top: 10%;
  right: -100px;
  animation: orbit-rotate 35s linear infinite;
}

.hero-orbit-two {
  width: 420px;
  height: 420px;
  top: 0;
  right: -160px;
  border-color: rgba(51, 255, 0, 0.06);
  animation: orbit-rotate 50s linear infinite reverse;
}

/* ========================================
   LARGE RAJDHANI HERO NAME
======================================== */

.hero-name-wrap {
  position: relative;
  width: 100%;
  padding: 0.8rem 0;
}

.hero-name {
  position: relative;
  width: 100%;
  min-width: 0;

  font-family: "Rajdhani", sans-serif;
  font-size: clamp(4.5rem, 7.2vw, 7rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.045em;

  animation: name-levitate 4.5s ease-in-out infinite;
  will-change: transform;
}

/* Both lines inherit EXACTLY the same font size */

.name-first,
.name-second {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.16em;

  width: fit-content;
  max-width: 100%;

  font-family: "Rajdhani", sans-serif;
  font-size: inherit !important;
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: inherit;

  background: linear-gradient(
    105deg,
    #f0ffeb 0%,
    #caffb9 15%,
    #7dff57 35%,
    #33ff00 55%,
    #caffb9 75%,
    #5cff36 100%
  );

  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  filter:
    drop-shadow(0 0 8px rgba(51, 255, 0, 0.45))
    drop-shadow(0 0 20px rgba(51, 255, 0, 0.22));

  animation: name-gradient 5s linear infinite;
}

/* Keep ScrambleText typography consistent */

.name-first :deep(*),
.name-second :deep(*) {
  font-family: "Rajdhani", sans-serif !important;
  font-size: inherit !important;
  font-weight: 700 !important;
  line-height: inherit !important;
  letter-spacing: inherit !important;
}

/* Second line spacing */

.name-first {
  margin: 0;
}

.name-second {
  margin-top: 0.08em;
}

/* Stronger hover glow */

.hero-name:hover .name-first,
.hero-name:hover .name-second {
  filter:
    drop-shadow(0 0 12px rgba(51, 255, 0, 0.8))
    drop-shadow(0 0 30px rgba(51, 255, 0, 0.4));
}

/* ========================================
   NEON UNDERLINE
======================================== */

.name-underline {
  position: relative;
  height: 4px;
  margin-top: 1.8rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 12px rgba(51, 255, 0, 0.08);
}

.underline-main {
  width: 75%;
  background: linear-gradient(90deg, #33ff00, #eaffdf);
  box-shadow: 0 0 16px #33ff00;
  animation: underline-pulse 4s ease-in-out infinite;
}

.underline-light {
  width: 25%;
  background: linear-gradient(
    90deg,
    rgba(186, 255, 170, 0.45),
    transparent
  );
}

/* ========================================
   CORNER DETAIL
======================================== */

.name-corner {
  position: absolute;
  top: -10px;
  right: 5%;
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.name-corner span:first-child {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 1px;
  background: #33ff00;
}

.name-corner span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 10px;
  background: #33ff00;
}

/* ========================================
   TERMINAL
======================================== */

.terminal-stage {
  isolation: isolate;
}

.terminal-shell {
  transform: translateZ(0);
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    transform 0.4s ease;
}

.terminal-shell:hover {
  transform: translateY(-4px);
  border-color: rgba(51, 255, 0, 0.42);
  box-shadow:
    0 0 45px rgba(51, 255, 0, 0.1),
    0 20px 65px rgba(0, 0, 0, 0.5);
}

.terminal-border-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 70%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(51, 255, 0, 0.8),
    transparent
  );
  animation: border-sweep 6s ease-in-out infinite;
  pointer-events: none;
}

.terminal-orbit {
  position: absolute;
  z-index: -1;
  border: 1px solid;
  border-radius: 50%;
  pointer-events: none;
}

.terminal-orbit-green {
  width: 110px;
  height: 110px;
  top: -35px;
  right: -30px;
  border-color: rgba(51, 255, 0, 0.13);
  animation: orbit-rotate 18s linear infinite;
}

.terminal-orbit-red {
  width: 75px;
  height: 75px;
  bottom: -20px;
  left: -20px;
  border-color: rgba(51, 255, 0, 0.1);
  animation: orbit-rotate 15s linear infinite reverse;
}

/* ========================================
   ANIMATIONS
======================================== */

@keyframes name-levitate {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes name-gradient {
  from {
    background-position: 0% center;
  }

  to {
    background-position: 200% center;
  }
}

@keyframes grid-drift {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 42px 42px;
  }
}

@keyframes glow-float {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(25px, -20px, 0) scale(1.15);
  }
}

@keyframes orbit-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes underline-pulse {
  0%,
  100% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }
}

@keyframes border-sweep {
  0% {
    left: -100%;
  }

  45%,
  100% {
    left: 130%;
  }
}

/* ========================================
   RESPONSIVENESS
======================================== */

@media (max-width: 1024px) {
  .hero-name {
    font-size: clamp(4rem, 8vw, 6rem);
  }
}

@media (max-width: 640px) {
  .hero-name {
    font-size: clamp(3.5rem, 12vw, 5rem);
    line-height: 1;
  }

  .name-first,
  .name-second {
    font-size: inherit !important;
    line-height: 1;
  }

  .name-underline {
    margin-top: 1.3rem;
  }

  .hero-orbit-one {
    right: -180px;
  }

  .hero-orbit-two {
    right: -220px;
  }

  .terminal-floating-label {
    left: 0.5rem;
  }
}

/* ========================================
   ACCESSIBILITY
======================================== */

@media (prefers-reduced-motion: reduce) {
  .hero-grid,
  .hero-glow,
  .hero-orbit,
  .hero-name,
  .name-first,
  .name-second,
  .underline-main,
  .terminal-border-glow,
  .terminal-orbit {
    animation: none !important;
  }

  .terminal-shell {
    transition: none;
  }
}

/* ========================================
   MOBILE ORBIT TEST
======================================== */

@media (max-width: 767px) {
  .terminal-orbit-green,
  .terminal-orbit-red {
    animation: none !important;
  }
}
</style>
