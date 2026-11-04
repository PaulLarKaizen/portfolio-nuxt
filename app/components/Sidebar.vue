
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
.profile-frame {
  position: relative;
  width: 140px;
  height: 140px;
  padding: 5px;
  border: 2px solid #33ff00;
  border-radius: 9999px;
  box-shadow:
    0 0 18px rgba(51, 255, 0, 0.2),
    0 0 35px rgba(51, 255, 0, 0.08);
}

.profile-inner {
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
}

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
  border-color: rgba(51, 255, 0, 0.65);
  background: rgba(51, 255, 0, 0.1);
  color: white;
  box-shadow: 0 0 12px rgba(51, 255, 0, 0.08);
}
</style>
