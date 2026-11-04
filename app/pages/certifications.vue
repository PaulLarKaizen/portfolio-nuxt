
<script setup lang="ts">
useHead({
  title: 'Certifications | Cyril John Paul Larga',
})

useSeoMeta({
  title: 'Certifications | Cyril John Paul Larga',
  description:
    'IT Specialist Java and Databases, Microsoft Office Specialist PowerPoint and Word certifications.',
})

const certificates = [
  {
    number: '01',
    title: 'IT Specialist - Java',
    issuer: 'Certiport | Pearson VUE',
    code: 'y9pT - uT6s',
    category: 'PROGRAMMING',
    image: '/images/certificates/it-specialist-java.png',
  },
  {
    number: '02',
    title: 'IT Specialist - Databases',
    issuer: 'Certiport | Pearson VUE',
    code: 'w9yU9 - H94A',
    category: 'DATABASE MANAGEMENT',
    image: '/images/certificates/it-specialist-databases.png',
  },
  {
    number: '03',
    title: 'MOS: PowerPoint',
    issuer: 'Microsoft 365 Apps',
    code: 'b96S - s4bS',
    category: 'PRODUCTIVITY',
    image: '/images/certificates/mos-powerpoint.png',
  },
  {
    number: '04',
    title: 'MOS: Word',
    issuer: 'Microsoft 365 Apps',
    code: 'mBc2 - DkqW',
    category: 'PRODUCTIVITY',
    image: '/images/certificates/mos-word.png',
  },
]

const verificationUrl =
  'https://www.certiport.com/portal/pages/credentialverification.aspx'
</script>

<template>
  <div class="page-enter mx-auto max-w-5xl space-y-8">

    <!-- Header -->
    <section class="rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-8 md:p-12">
      <p class="mb-4 font-mono text-xs tracking-[0.3em] text-[#33ff00]">
        ACHIEVEMENTS
      </p>

      <h1 class="text-4xl font-black tracking-tight text-white md:text-6xl">
        <span class="text-[#33ff00]">CREDENTIALS.</span>
      </h1>

      <p class="mt-6 max-w-2xl leading-8 text-white/65">
        A collection of professional certifications representing my
        technical knowledge, practical skills, and continued development
        in Information Technology.
      </p>

      <div class="mt-8 flex items-center gap-3">
        <span class="h-px w-12 bg-[#33ff00]"></span>
        <span class="font-mono text-xs tracking-widest text-[#33ff00]/70">
          VERIFICATION
        </span>
      </div>
    </section>

    <!-- Archive Information -->
    <div class="flex items-center justify-between">
      <p class="font-mono text-xs tracking-[0.2em] text-white/50">
        CERTIFICATES
      </p>

      <span class="rounded-full border border-[#33ff00]/30 bg-[#33ff00]/5 px-4 py-2 font-mono text-xs text-[#33ff00]">
        {{ certificates.length }} RECORDS
      </span>
    </div>

    <!-- Certificates -->
    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="certificate in certificates"
        :key="certificate.number"
        class="group overflow-hidden rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/60 hover:shadow-[0_0_25px_rgba(51,255,0,0.08)]"
      >
        <!-- Clickable Certificate Image -->
        <a
          :href="certificate.image"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="'View full certificate: ' + certificate.title"
          class="block overflow-hidden bg-black/40 p-3"
        >
          <img
            :src="certificate.image"
            :alt="certificate.title + ' certificate'"
            class="aspect-[4/3] w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <p class="mt-2 text-center font-mono text-[10px] tracking-widest text-[#33ff00]/50">
            CLICK IMAGE TO VIEW FULL CERTIFICATE
          </p>
        </a>

        <!-- Certificate Details -->
        <div class="p-6">
          <div class="mb-4 flex items-center justify-between gap-2">
            <span class="font-mono text-xs tracking-widest text-[#33ff00]/60">
            </span>

            <span class="rounded-md border border-[#33ff00]/20 px-2 py-1 font-mono text-[9px] tracking-wider text-[#33ff00]/80">
              {{ certificate.category }}
            </span>
          </div>

          <h2 class="text-3xl font-black leading-snug text-white transition-colors duration-300 group-hover:text-[#33ff00]">
            {{ certificate.title }}
          </h2>

          <p class="mt-2 text-sm text-white/45">
            {{ certificate.issuer }}
          </p>

          <!-- Verification Code -->
          <div class="mt-6 rounded-xl border border-[#33ff00]/20 bg-black/30 p-4">
            <p class="mb-2 font-mono text-[10px] tracking-[0.2em] text-[#33ff00]/60">
              CREDENTIAL VERIFICATION CODE
            </p>

            <p class="font-mono text-lg font-bold tracking-wider text-white">
              {{ certificate.code }}
            </p>
          </div>

          <!-- Verification Link -->
          <a
            :href="verificationUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#33ff00] transition-colors hover:text-white"
          >
            &gt;&gt; VERIFY BADGE
            <span aria-hidden="true">â†—</span>
          </a>

          <div class="mt-6 h-px w-full bg-gradient-to-r from-[#33ff00]/40 to-transparent"></div>
        </div>
      </article>
    </div>
  </div>
</template>
