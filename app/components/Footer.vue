<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="footer footer-center border-t border-[#33ff00]/20 bg-[#080d0b]/90 px-6 py-6 text-center"
  >
    <div>
      <p class="font-mono text-xs tracking-wider text-white/50">
        © {{ currentYear }}
        <span class="font-bold text-[#33ff00]">
          CYRIL JOHN PAUL A. LARGA
        </span>
      </p>

      <p class="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
        Built with Nuxt · Tailwind CSS · DaisyUI
      </p>
    </div>
  </footer>
</template>