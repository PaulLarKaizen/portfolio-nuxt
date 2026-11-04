
<template>
  <aside
    class="hidden w-64 shrink-0 self-stretch border-r border-[#33ff00]/20 bg-[#080d0b]/90 px-6 py-10 shadow-[10px_0_30px_rgba(0,0,0,0.25)] lg:block"
  >
    <div class="sticky top-28 flex flex-col items-center text-center">

      <!-- Profile Photo -->
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

      <!-- Compact Identity -->
      <p class="mt-5 font-mono text-xs font-bold tracking-[0.3em] text-[#33ff00]">
        IT STUDENT
      </p>

      <p class="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/50">
        Aspiring Cybersecurity Professional
      </p>

      <!-- Divider -->
      <div class="section-line my-7"></div>

      <!-- Kaizen Principle -->
      <div class="mt-1 w-full rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 px-3 py-4">
        <div class="flex items-center justify-center gap-2">
          <span class="h-2 w-2 animate-pulse rounded-full bg-[#33ff00]"></span>

          <span class="font-mono text-[0.65rem] font-bold tracking-wider text-[#33ff00]">
            KAIZEN
          </span>
        </div>

        <p class="mt-2 text-xs text-white/55">
          Continuous Improvement
        </p>
      </div>

      <!-- Social Links -->
      <div class="mt-8 w-full border-t border-white/10 pt-5">
        <p class="section-heading mb-4">CONNECT</p>

        <div class="flex flex-col gap-3">
          <!-- GitHub -->
          <a
            href="https://github.com/PaulLarKaizen"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/cyril-larga/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

    </div>
  </aside>
</template>

<style scoped>
/* ========================================
   PROFILE PHOTO - CYBER HUD EFFECT
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

/* Rotating outer neon ring */
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

/* Pulsating outer glow */
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

/* Slight photo zoom on hover */
.profile-frame:hover .profile-photo {
  transform: scale(1.1);
}

/* Moving scanner light */
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

/* Online indicator */
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

/* ========================================
   PROFILE ANIMATIONS
======================================== */

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

.social-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid rgba(51, 255, 0, 0.2);
  border-radius: 6px;
  color: #33ff00;
  font-size: 0.75rem;
  transition: all 0.25s ease;
}

.social-link:hover {
  border-color: rgba(255, 0, 60, 0.65);
  background: rgba(51, 255, 0, 0.1);
  color: white;
  box-shadow: 0 0 12px rgba(51, 255, 0, 0.08);
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
  .profile-frame {
    transition: none !important;
  }
}
</style>
