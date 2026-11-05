
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const isSidebarOpen = useState<boolean>("profile-sidebar-open", () => false);
const isNavbarOpen = useState<boolean>("mobile-navbar-open", () => false);

const previousBodyOverflow = ref("");

function openSidebar() {
  // Close the Navbar before opening the Sidebar.
  isNavbarOpen.value = false;

  previousBodyOverflow.value = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  isSidebarOpen.value = true;
}

function closeSidebar() {
  isSidebarOpen.value = false;
  document.body.style.overflow = previousBodyOverflow.value;
}

function toggleSidebar() {
  if (isSidebarOpen.value) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    if (isSidebarOpen.value) {
      closeSidebar();
    } else if (isNavbarOpen.value) {
      isNavbarOpen.value = false;
    }
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = previousBodyOverflow.value;
});
</script>

<template>
  <!-- MOBILE HAMBURGER BUTTON -->
  <div class="mobile-menu-wrapper w-full lg:hidden">
    <button
      type="button"
      @click="toggleSidebar"
      :aria-expanded="isSidebarOpen"
      aria-controls="profile-sidebar"
      :aria-label="isSidebarOpen ? 'Close sidebar' : 'Open sidebar'"
      class="cyber-menu-button"
      :class="{
  'menu-active': isSidebarOpen,
}"
    >
      <span class="menu-icon-frame">
        <span class="menu-icon-lines">
          <span
            class="menu-line menu-line-top"
            :class="{ 'line-top-active': isSidebarOpen }"
          ></span>

          <span
            class="menu-line menu-line-middle"
            :class="{ 'line-middle-active': isSidebarOpen }"
          ></span>

          <span
            class="menu-line menu-line-bottom"
            :class="{ 'line-bottom-active': isSidebarOpen }"
          ></span>
        </span>

        <span class="menu-icon-glow"></span>
      </span>

      <span class="menu-scanner"></span>
    </button>
  </div>

  <!-- MOBILE BACKDROP -->
  <Transition name="cyber-backdrop">
    <button
      v-if="isSidebarOpen"
      type="button"
      aria-label="Close sidebar"
      @click="closeSidebar"
      class="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm lg:hidden"
    ></button>
  </Transition>

  <!-- SIDEBAR -->
  <aside
    id="profile-sidebar"
    class="fixed inset-y-0 left-0 z-[70] h-screen w-72 max-w-[85vw] shrink-0 overflow-y-auto border-r border-[#33ff00]/20 bg-[#080d0b]/95 px-6 py-10 shadow-[10px_0_30px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:static lg:z-auto lg:h-auto lg:w-64 lg:max-w-none lg:self-stretch lg:overflow-visible lg:bg-[#080d0b]/90 lg:shadow-[10px_0_30px_rgba(0,0,0,0.25)]"
    :class="
      isSidebarOpen
        ? 'translate-x-0'
        : '-translate-x-full lg:translate-x-0'
    "
  >
    <!-- MOBILE DRAWER HEADER -->
    <div class="mb-8 flex items-center justify-between lg:hidden">
      <div>
        <p class="font-mono text-xs font-bold tracking-[0.3em] text-[#33ff00]">
          PROFILE
        </p>

        <p class="mt-1 text-[0.65rem] text-white/40">
          Personal Information
        </p>
      </div>
    </div>

    <!-- SIDEBAR CONTENT -->
    <div class="sticky top-28 flex flex-col items-center text-center">

      <!-- PROFILE PHOTO -->
      <div class="profile-frame">
        <div class="profile-inner">
          <img
            src="/images/myself/profile.jpg"
            alt="Profile photo"
            class="profile-photo"
          />

          <div class="profile-scan"></div>
        </div>

        <span class="profile-status"></span>
      </div>

      <!-- IDENTITY -->
      <p
        class="mt-5 font-mono text-xs font-bold tracking-[0.3em] text-[#33ff00]"
      >
        IT STUDENT
      </p>

      <p
        class="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/50"
      >
        Aspiring Cybersecurity Professional
      </p>

      <!-- DIVIDER -->
      <div class="section-line my-7"></div>

      <!-- KAIZEN -->
      <div
        class="mt-1 w-full rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 px-3 py-4"
      >
        <div class="flex items-center justify-center gap-2">
          <span
            class="h-2 w-2 animate-pulse rounded-full bg-[#33ff00]"
          ></span>

          <span
            class="font-mono text-[0.65rem] font-bold tracking-wider text-[#33ff00]"
          >
            KAIZEN
          </span>
        </div>

        <p class="mt-2 text-xs text-white/55">
          Continuous Improvement
        </p>
      </div>

      <!-- CONNECT -->
      <div class="mt-8 w-full border-t border-white/10 pt-5">
        <p class="section-heading mb-4">CONNECT</p>

        <div class="flex flex-col gap-3">

          <!-- GITHUB -->
          <a
            href="https://github.com/PaulLarKaizen"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeSidebar"
            class="social-link"
          >
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="social-icon"
                aria-hidden="true"
              >
                <path
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>

              <span>GitHub</span>
            </div>

            <span class="social-arrow" aria-hidden="true">↗</span>
          </a>

          <!-- LINKEDIN -->
          <a
            href="https://www.linkedin.com/in/cyril-larga/"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeSidebar"
            class="social-link"
          >
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="social-icon"
                aria-hidden="true"
              >
                <path
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.3H4.97V9.75h2.96v8.55ZM6.45 8.58a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.85 9.72h-2.96v-4.16c0-.99-.02-2.27-1.38-2.27-1.38 0-1.59 1.08-1.59 2.2v4.23H9.41V9.75h2.84v1.17h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.56v4.36Z"
                />
              </svg>

              <span>LinkedIn</span>
            </div>

            <span class="social-arrow" aria-hidden="true">↗</span>
          </a>

          <!-- GMAIL -->
          <a
            href="mailto:cyril.larga@gmail.com"
            @click="closeSidebar"
            class="social-link"
          >
            <div class="flex min-w-0 items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="social-icon"
                aria-hidden="true"
              >
                <path
                  d="M3 18V6.5C3 5.67 3.94 5.2 4.6 5.7L12 11.3l7.4-5.6c.66-.5 1.6-.03 1.6.8V18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 7.5V18h4V10.5M17 10.5V18h4V7.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span class="truncate">Gmail</span>
            </div>

            <span class="social-arrow" aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* ========================================
   MOBILE MENU BUTTON
======================================== */

.mobile-menu-wrapper {
  position: relative;
  height: 74px;
  z-index: 80;
}

.cyber-menu-button {
  position: fixed;
  top: 7rem;
  left: 1.25rem;
  z-index: 40;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;
  padding: 0;

  overflow: hidden;
  border: 1px solid rgba(51, 255, 0, 0.3);
  border-radius: 9px;

  background: linear-gradient(
    135deg,
    rgba(8, 18, 12, 0.98),
    rgba(5, 10, 8, 0.96)
  );

  box-shadow:
    0 0 12px rgba(51, 255, 0, 0.06),
    inset 0 0 15px rgba(51, 255, 0, 0.025);

  transition:
    top 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;
}

/* Move the Sidebar hamburger below the expanded Navbar. */
.cyber-menu-button.navbar-expanded {
  top: 22rem;
}

.cyber-menu-button::before,
.cyber-menu-button::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 12px;
  height: 12px;
  border-color: #33ff00;
  border-style: solid;
  opacity: 0.65;
  transition: all 0.35s ease;
}

.cyber-menu-button::before {
  top: 0;
  left: 0;
  border-width: 1px 0 0 1px;
}

.cyber-menu-button::after {
  right: 0;
  bottom: 0;
  border-width: 0 1px 1px 0;
}

.cyber-menu-button:hover,
.cyber-menu-button.menu-active {
  border-color: rgba(51, 255, 0, 0.85);
  box-shadow:
    0 0 15px rgba(51, 255, 0, 0.15),
    0 0 30px rgba(51, 255, 0, 0.07),
    inset 0 0 20px rgba(51, 255, 0, 0.06);
}

.cyber-menu-button:hover::before,
.cyber-menu-button:hover::after,
.cyber-menu-button.menu-active::before,
.cyber-menu-button.menu-active::after {
  width: 19px;
  height: 19px;
  opacity: 1;
}

.cyber-menu-button:active {
  scale: 0.97;
}

.cyber-menu-button:focus-visible {
  outline: 2px solid #33ff00;
  outline-offset: 4px;
}

/* ========================================
   BUTTON TRAVEL ANIMATION
======================================== */

.cyber-menu-button.menu-active {
  z-index: 110;

  transform:
    translateX(calc(min(85vw, 18rem) - 94px))
    translateY(-88px);
}

/* ========================================
   HAMBURGER TO X ANIMATION
======================================== */

.menu-icon-frame {
  position: relative;
  display: flex;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(51, 255, 0, 0.25);
  border-radius: 6px;
  background: rgba(51, 255, 0, 0.055);

  transition:
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.cyber-menu-button:hover .menu-icon-frame,
.cyber-menu-button.menu-active .menu-icon-frame {
  border-color: rgba(51, 255, 0, 0.7);
  background: rgba(51, 255, 0, 0.1);
  box-shadow: 0 0 12px rgba(51, 255, 0, 0.12);
}

.menu-icon-lines {
  position: relative;
  display: flex;
  width: 18px;
  height: 15px;
  flex-direction: column;
  justify-content: space-between;
}

.menu-line {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  background: #33ff00;
  box-shadow: 0 0 6px rgba(51, 255, 0, 0.65);

  transition:
    transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    opacity 0.25s ease,
    width 0.3s ease;
}

.menu-line-top {
  transform-origin: center;
}

.menu-line-middle {
  width: 72%;
  align-self: flex-end;
}

.menu-line-bottom {
  width: 85%;
  transform-origin: center;
}

.line-top-active {
  transform: translateY(6.5px) rotate(45deg);
}

.line-middle-active {
  width: 100%;
  opacity: 0;
  transform: translateX(-8px);
}

.line-bottom-active {
  width: 100%;
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Icon glow */
.menu-icon-glow {
  position: absolute;
  inset: -5px;
  border: 1px solid rgba(51, 255, 0, 0.2);
  border-radius: 9px;
  opacity: 0;
  transform: scale(0.85);
  transition: all 0.35s ease;
  pointer-events: none;
}

.cyber-menu-button:hover .menu-icon-glow,
.cyber-menu-button.menu-active .menu-icon-glow {
  opacity: 1;
  transform: scale(1);
}

/* Scanner */
.menu-scanner {
  position: absolute;
  top: 0;
  left: -100%;
  width: 45%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(51, 255, 0, 0.07),
    transparent
  );
  transform: skewX(-20deg);
}

.cyber-menu-button:hover .menu-scanner {
  animation: menu-scanner-sweep 0.9s ease forwards;
}

@keyframes menu-scanner-sweep {
  from {
    left: -100%;
  }

  to {
    left: 150%;
  }
}

/* ========================================
   BACKDROP
======================================== */

.cyber-backdrop-enter-active,
.cyber-backdrop-leave-active {
  transition: opacity 0.35s ease;
}

.cyber-backdrop-enter-from,
.cyber-backdrop-leave-to {
  opacity: 0;
}

/* ========================================
   PROFILE PHOTO
======================================== */

.profile-frame {
  position: relative;
  isolation: isolate;
  width: 140px;
  height: 140px;
  padding: 5px;
  border: 2px solid #33ff00;
  border-radius: 9999px;
  box-shadow:
    0 0 18px rgba(51, 255, 0, 0.2),
    0 0 35px rgba(51, 255, 0, 0.08);
  transition: box-shadow 0.35s ease;
}

.profile-frame::before {
  content: "";
  position: absolute;
  inset: -8px;
  border: 1px solid transparent;
  border-top-color: #33ff00;
  border-right-color: rgba(51, 255, 0, 0.45);
  border-radius: 9999px;
  pointer-events: none;
  animation: profile-rotate 7s linear infinite;
}

.profile-frame::after {
  content: "";
  position: absolute;
  inset: -12px;
  border-radius: 9999px;
  background: rgba(51, 255, 0, 0.08);
  filter: blur(15px);
  z-index: -1;
  pointer-events: none;
  animation: profile-glow 3s ease-in-out infinite;
}

.profile-frame:hover {
  box-shadow:
    0 0 22px rgba(51, 255, 0, 0.35),
    0 0 45px rgba(51, 255, 0, 0.18);
}

.profile-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 9999px;
  background: #101a14;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
}

.profile-frame:hover .profile-photo {
  transform: scale(1.1);
}

.profile-scan {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 45%;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(51, 255, 0, 0.04),
    rgba(51, 255, 0, 0.3),
    rgba(51, 255, 0, 0.04),
    transparent
  );
  animation: profile-scan 4s ease-in-out infinite;
}

.profile-status {
  position: absolute;
  right: 7px;
  bottom: 10px;
  width: 15px;
  height: 15px;
  border: 3px solid #080d0b;
  border-radius: 9999px;
  background: #33ff00;
  box-shadow: 0 0 10px rgba(51, 255, 0, 0.8);
  z-index: 2;
}

@keyframes profile-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes profile-glow {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.95);
  }

  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes profile-scan {
  0% {
    top: -100%;
  }

  100% {
    top: 150%;
  }
}

/* ========================================
   SIDEBAR ELEMENTS
======================================== */

.section-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(51, 255, 0, 0.35),
    transparent
  );
}

.section-heading {
  font-family: monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
}

/* ========================================
   SOCIAL LINKS
======================================== */

.social-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 11px 12px;
  border: 1px solid rgba(51, 255, 0, 0.2);
  border-radius: 6px;
  color: #33ff00;
  font-size: 0.75rem;
  transition: all 0.25s ease;
}

.social-icon {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  color: #33ff00;
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.social-arrow {
  color: rgba(51, 255, 0, 0.55);
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 0, 60, 0.65);
  background: rgba(51, 255, 0, 0.1);
  color: white;
  box-shadow: 0 0 12px rgba(51, 255, 0, 0.08);
}

.social-link:hover .social-icon {
  color: white;
  transform: scale(1.12);
}

.social-link:hover .social-arrow {
  color: #33ff00;
  transform: translate(2px, -2px);
}

/* ========================================
   ACCESSIBILITY
======================================== */

@media (prefers-reduced-motion: reduce) {
  .profile-frame::before,
  .profile-frame::after,
  .profile-scan {
    animation: none !important;
  }

  .profile-photo,
  .profile-frame,
  .social-link,
  .social-icon,
  .social-arrow,
  .cyber-menu-button,
  .menu-line,
  .menu-icon-frame,
  .menu-icon-glow {
    transition: none !important;
  }

  .menu-scanner {
    display: none;
  }

  .cyber-backdrop-enter-active,
  .cyber-backdrop-leave-active {
    transition: none;
  }
}
</style>
