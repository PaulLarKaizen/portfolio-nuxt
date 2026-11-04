
<script setup lang="ts">
useHead({
  title: "About | Cyril John Paul Larga",
});

useSeoMeta({
  title: "About | Cyril John Paul Larga",
  description:
    "Learn about my interests in digital privacy, technology systems, software development, and cybersecurity.",
});
</script>

<template>
  <div class="page-enter mx-auto max-w-5xl space-y-8">
    <!-- Page Introduction -->
    <section
      class="relative overflow-hidden rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-8 md:p-12"
    >
      <div
        class="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#33ff00]/5 blur-3xl"
      ></div>

      <h1 class="text-4xl font-black tracking-tight text-white md:text-6xl">
        <ScrambleText text="GET TO " />
        <ScrambleText
          text=" KNOW ME"
          class="text-[#33ff00]"
        />
      </h1>

      <p class="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
        My journey in Information Technology is driven by curiosity about
        how digital systems work, how they can be improved, how they
        can be protected and how can they be automated
      </p>

      <div class="mt-8 flex items-center gap-3">
        <span class="h-px w-12 bg-[#33ff00]"></span>
        <span class="font-mono text-xs tracking-widest text-[#33ff00]/70">
          BACKGROUND AND INTERESTS
        </span>
      </div>
    </section>

    <!-- Background and Interests -->
    <div class="grid gap-6 md:grid-cols-2">
      <ContentCard subtitle="FOUNDATION" title="BACKGROUND">
        <p class="leading-8">
          I am an IT student with an interest in
          <span class="font-semibold text-[#33ff00]">
            digital security and privacy
          </span>
        </p>

        <p class="mt-5 leading-8">
          Developed a foundation in database management,
          software development, network configurations, and agentic AI systems.
        </p>
      </ContentCard>

      <ContentCard title="INTERESTS" subtitle="EXPLORATION">
        <p class="leading-8">
          I am passionate about solving logical problems and exploring the
          intricacies of cybersecurity, networking, and agentic AI.
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <span class="badge badge-outline border-[#33ff00]/40 text-[#33ff00]">
            Problem Solving
          </span>
          <span class="badge badge-outline border-[#33ff00]/40 text-[#33ff00]">
            Cybersecurity
          </span>
          <span class="badge badge-outline border-[#33ff00]/40 text-[#33ff00]">
            Agentic AI Systems
          </span>
          <span class="badge badge-outline border-[#33ff00]/40 text-[#33ff00]">
            Networking
          </span>
        </div>
      </ContentCard>
    </div>

    <!-- Career Direction -->
    <section
      class="relative overflow-hidden rounded-2xl border border-[#33ff00]/30 bg-[#0a100d] p-8 md:p-10"
    >
      <div
        class="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#33ff00]/5 to-transparent"
      ></div>

      <div class="relative">
        <p class="mb-3 font-mono text-xs tracking-[0.25em] text-[#33ff00]">
          CAREER DIRECTION
        </p>

        <h2 class="text-2xl font-black text-white md:text-3xl">
          CYBERSECURITY GOAL
        </h2>

        <p class="mt-5 max-w-3xl leading-8 text-white/70">
          My aspiration is to become a cybersecurity defender, focusing
          on ethical hacking, network security, threat detection, and
          system hardening.
        </p>

        <div class="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div class="rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 p-4">
            <p class="text-sm font-bold text-[#33ff00]">01</p>
            <p class="mt-2 text-xs text-white/70">Ethical Hacking</p>
          </div>

          <div class="rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 p-4">
            <p class="text-sm font-bold text-[#33ff00]">02</p>
            <p class="mt-2 text-xs text-white/70">Network Security</p>
          </div>

          <div class="rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 p-4">
            <p class="text-sm font-bold text-[#33ff00]">03</p>
            <p class="mt-2 text-xs text-white/70">Threat Detection</p>
          </div>

          <div class="rounded-lg border border-[#33ff00]/20 bg-[#33ff00]/5 p-4">
            <p class="text-sm font-bold text-[#33ff00]">04</p>
            <p class="mt-2 text-xs text-white/70">System Hardening</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
