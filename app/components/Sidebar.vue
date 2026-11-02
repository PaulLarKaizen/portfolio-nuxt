
<template>
  <aside
    class="hidden min-h-screen w-64 shrink-0 border-r border-[#33ff00]/20 bg-[#080d0b]/90 px-6 py-10 shadow-[10px_0_30px_rgba(0,0,0,0.25)] lg:block"
  >
    <div class="sticky top-28 flex flex-col items-center text-center">
      <!-- Profile image -->
      <div
        class="mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-[#33ff00] bg-[#101a14] shadow-[0_0_20px_rgba(51,255,0,0.15)]"
      >
        <span class="font-mono text-3xl font-black text-[#33ff00]">
          CJPL
        </span>
      </div>

      <!-- Personal information -->
      <h2 class="text-lg font-black tracking-wide text-white">
        CYRIL JOHN PAUL A. LARGA
      </h2>

      <p class="mt-1 text-sm font-bold tracking-widest text-[#33ff00]">
        Aspiring Cybersecurity Professional
      </p>

      <p class="mt-3 text-xs uppercase tracking-wider text-white/50">
        BSIT Student
      </p>

      <div class="my-7 h-px w-full bg-[#33ff00]/20"></div>

      <!-- Short introduction -->
      <p class="text-sm leading-6 text-white/65">
        An IT student exploring technology, software development, and
        continuous learning.
      </p>

      <!-- Status -->
      <div
        class="card mt-8 flex w-full items-center justify-center gap-2 rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 px-3 py-3 shadow-none"
      >
        <span class="h-2 w-2 animate-pulse rounded-full bg-[#33ff00]"></span>

        <span class="font-mono text-[0.6rem] tracking-wider text-[#33ff00]">
          Kaizen - Continuous Improvement
        </span>
      </div>

      <!-- Social links -->
      <div class="mt-8 w-full border-t border-white/10 pt-5">
        <p
          class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40"
        >
          CONNECT
        </p>

        <div class="flex flex-col gap-3">
          <!-- GitHub -->
          <a
            href="https://github.com/PaulLarKaizen"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm w-full justify-center gap-2 border border-[#33ff00]/20 text-xs text-[#33ff00] transition-all duration-300 hover:border-[#33ff00]/60 hover:bg-[#33ff00]/10 hover:text-white"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/cyril-larga/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm w-full justify-center gap-2 border border-[#33ff00]/20 text-xs text-[#33ff00] transition-all duration-300 hover:border-[#33ff00]/60 hover:bg-[#33ff00]/10 hover:text-white"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>
