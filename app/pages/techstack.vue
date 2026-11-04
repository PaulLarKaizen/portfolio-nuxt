
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

useHead({
  title: "Tech Stack | Cyril John Paul Larga",
});

useSeoMeta({
  title: "Tech Stack | Cyril John Paul Larga",
  description:
    "Technologies, development tools, and skills assessment included in my IT portfolio.",
});

const categories = [
  {
    number: "01",
    title: "FRONTEND",
    description: "Web structure and interface development.",
    items: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    number: "02",
    title: "BACKEND & DATA",
    description: "Programming languages and database technologies.",
    items: ["Java", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    number: "03",
    title: "DEVELOPMENT TOOLS",
    description: "Tools used in development and version control.",
    items: ["VS Code", "Git", "GitHub", "Android Studio"],
  },
];

// Current technology proficiency assessments.
const skills = [
  { name: "HTML5", score: 75 },
  { name: "CSS3", score: 60 },
  { name: "JavaScript", score: 65 },
  { name: "Java", score: 70 },
  { name: "Python", score: 50 },
  { name: "PostgreSQL", score: 60 },
  { name: "MongoDB", score: 50 },
  { name: "VS Code", score: 85 },
  { name: "Git", score: 60 },
  { name: "GitHub", score: 70 },
  { name: "Android Studio", score: 85 },
];

// Reveal charts and start the inventory movement when visible.
const skillChartSection = ref<HTMLElement | null>(null);
const chartsVisible = ref(false);

let skillChartObserver: IntersectionObserver | undefined;

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (prefersReducedMotion.matches) {
    chartsVisible.value = true;
    return;
  }

  if (!("IntersectionObserver" in window)) {
    chartsVisible.value = true;
    return;
  }

  skillChartObserver = new IntersectionObserver(
    (entries) => {
      const sectionIsVisible = entries.some(
        (entry) => entry.isIntersecting,
      );

      if (sectionIsVisible) {
        chartsVisible.value = true;
        skillChartObserver?.disconnect();
        skillChartObserver = undefined;
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -80px 0px",
    },
  );

  if (skillChartSection.value) {
    skillChartObserver.observe(skillChartSection.value);
  }
});

onUnmounted(() => {
  skillChartObserver?.disconnect();
});

// Individual technology doughnut chart.
function doughnutOption(score: number) {
  return {
    animation: true,
    animationDuration: 1200,
    animationEasing: "cubicOut",
    animationDurationUpdate: 700,

    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },

    series: [
      {
        type: "pie",
        radius: ["62%", "80%"],
        center: ["50%", "50%"],
        startAngle: 90,
        clockwise: true,
        label: { show: false },
        labelLine: { show: false },

        data: [
          {
            value: score,
            name: "Assessed proficiency",
            itemStyle: { color: "#33ff00" },
          },
          {
            value: 100 - score,
            name: "Remaining",
            itemStyle: { color: "rgba(255,255,255,0.10)" },
          },
        ],
      },
    ],

    graphic: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: `${score}%`,
          fill: "#ffffff",
          fontSize: 19,
          fontWeight: "bold",
          fontFamily: "monospace",
        },
      },
    ],
  };
}

// Actual self-assessed yearly knowledge progression.
const progressOption = {
  backgroundColor: "transparent",

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#ffffff50",
        type: "dashed",
      },
    },
  },

  legend: {
    type: "scroll",
    top: 5,
    left: "center",
    textStyle: {
      color: "#b3b3b3",
      fontSize: 10,
    },
    pageTextStyle: {
      color: "#ffffff",
    },
    pageIconColor: "#33ff00",
    pageIconInactiveColor: "#555555",
  },

  grid: {
    left: 45,
    right: 25,
    top: 90,
    bottom: 45,
    containLabel: true,
  },

  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["2023", "2024", "2025", "2026"],
    axisLabel: {
      color: "#a3a3a3",
      fontSize: 12,
    },
    axisLine: {
      lineStyle: {
        color: "#ffffff30",
      },
    },
  },

  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 10,
    axisLabel: {
      color: "#a3a3a3",
      formatter: "{value}%",
    },
    splitLine: {
      lineStyle: {
        color: "#ffffff15",
      },
    },
  },

  series: [
    {
      name: "Programming & Coding",
      type: "line",
      smooth: true,
      data: [0, 25, 40, 70],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#33ff00" },
      lineStyle: { width: 3 },
    },
    {
      name: "Database Management",
      type: "line",
      smooth: true,
      data: [0, 20, 50, 60],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#00d9ff" },
      lineStyle: { width: 2 },
    },
    {
      name: "Version Control & Collaboration",
      type: "line",
      smooth: true,
      data: [0, 15, 40, 60],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#b388ff" },
      lineStyle: { width: 2 },
    },
    {
      name: "Web Development",
      type: "line",
      smooth: true,
      data: [0, 20, 45, 75],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#ffb74d" },
      lineStyle: { width: 2 },
    },
    {
      name: "Networking",
      type: "line",
      smooth: true,
      data: [0, 30, 50, 80],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#ff5c8a" },
      lineStyle: { width: 2 },
    },
    {
      name: "Cybersecurity",
      type: "line",
      smooth: true,
      data: [0, 10, 25, 44],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#4dd0a1" },
      lineStyle: { width: 2 },
    },
    {
      name: "Software Development",
      type: "line",
      smooth: true,
      data: [0, 35, 60, 69],
      symbol: "circle",
      symbolSize: 7,
      itemStyle: { color: "#f06292" },
      lineStyle: { width: 2 },
    },
  ],
};
</script>

<template>
  <div class="page-enter mx-auto max-w-5xl space-y-8">
    <!-- Page introduction -->
    <section
      class="rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-8 md:p-12"
    >
      <p class="mb-4 font-mono text-xs tracking-[0.3em] text-[#33ff00]">
        TECHNOLOGIES
      </p>

      <h1 class="text-4xl font-black tracking-tight text-white md:text-6xl">
        MY TECH
        <span class="text-[#33ff00]">STACK.</span>
      </h1>

      <p class="mt-6 max-w-2xl leading-8 text-white/65">
        Technologies and development tools included in my journey in
        Information Technology.
      </p>

      <div class="mt-8 flex items-center gap-3">
        <span class="h-px w-12 bg-[#33ff00]"></span>

        <span class="font-mono text-xs tracking-widest text-[#33ff00]/70">
          INVENTORY
        </span>
      </div>
    </section>

    <!-- Technology categories -->
    <div class="grid gap-6 md:grid-cols-2">
      <section
        v-for="category in categories"
        :key="category.number"
        class="group rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/50 hover:shadow-[0_0_25px_rgba(51,255,0,0.08)]"
      >
        <div class="mb-6 flex items-start justify-between">
          <div>
            <h2 class="mt-3 text-xl font-black text-white">
              {{ category.title }}
            </h2>
          </div>

          <span class="font-mono text-2xl font-black text-[#33ff00]/30">
            {{ category.number }}
          </span>
        </div>

        <p class="mb-6 text-sm leading-7 text-white/55">
          {{ category.description }}
        </p>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="item in category.items"
            :key="item"
            class="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-[#33ff00]/20 bg-[#33ff00]/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#33ff00]/60 hover:bg-[#33ff00]/10"
          >
            <TechIcon :name="item" />

            <span class="text-center text-xs font-semibold text-white/80">
              {{ item }}
            </span>
          </div>
        </div>

        <div
          class="mt-8 h-px w-full bg-gradient-to-r from-[#33ff00]/40 to-transparent"
        ></div>
      </section>
    </div>

    <!-- Continuous skill inventory -->
    <section ref="skillChartSection" class="space-y-6">
      <div>
        <p class="mb-3 font-mono text-xs tracking-[0.3em] text-[#33ff00]">
          SKILL ANALYTICS / 01
        </p>

        <h2 class="text-2xl font-black text-white md:text-3xl">
          CURRENT SKILL
          <span class="text-[#33ff00]">PROFICIENCY.</span>
        </h2>

        <p class="mt-3 text-sm leading-7 text-white/55">
          Current assessed proficiency across each technology in my stack.
        </p>
      </div>

      <!-- Retro inventory frame -->
      <div
        class="skill-inventory relative overflow-hidden border border-[#33ff00]/30 bg-[#070d09] p-3 sm:p-4"
      >
        <!-- Top decorative status bar -->
        <div
          class="mb-4 flex items-center justify-between border-b border-[#33ff00]/20 pb-3"
        >
          <div class="flex items-center gap-2">
            <span
              class="h-2 w-2 animate-pulse bg-[#33ff00] shadow-[0_0_8px_#33ff00]"
            ></span>

            <span
              class="font-mono text-[10px] font-bold tracking-[0.2em] text-[#33ff00]"
            >
              INVENTORY DATABASE
            </span>
          </div>

          <span class="font-mono text-[10px] tracking-widest text-white/40">
            11 ITEMS / ACTIVE
          </span>
        </div>

        <!-- Scrolling viewport -->
        <div
          class="skill-marquee-viewport"
          :class="{ 'is-ready': chartsVisible }"
        >
          <div
            class="skill-marquee-track"
            :class="{ 'is-running': chartsVisible }"
          >
            <!-- First inventory set -->
            <div class="skill-marquee-group">
              <div
                v-for="(skill, index) in skills"
                :key="`first-${skill.name}`"
                class="skill-chart-card group flex min-w-0 flex-col items-center justify-center border border-[#33ff00]/20 bg-[#0b140e] p-2 transition-all duration-300 hover:border-[#33ff00]/70 hover:bg-[#102014] sm:p-3"
                :class="{ 'skill-chart-card-enter': chartsVisible }"
                :style="{ animationDelay: `${index * 80}ms` }"
              >
                <ClientOnly>
                  <div v-if="chartsVisible" class="h-28 w-full min-w-0 sm:h-32">
                    <VChart
                      :option="doughnutOption(skill.score)"
                      autoresize
                      style="height: 100%; width: 100%"
                    />
                  </div>

                  <div
                    v-else
                    class="flex h-28 w-full items-center justify-center sm:h-32"
                    aria-hidden="true"
                  >
                    <div
                      class="flex h-20 w-20 items-center justify-center rounded-full border-[7px] border-white/10 sm:h-24 sm:w-24"
                    >
                      <span class="font-mono text-[10px] text-white/30">
                        READY
                      </span>
                    </div>
                  </div>

                  <template #fallback>
                    <div
                      class="flex h-28 w-full items-center justify-center font-mono text-[10px] text-white/40 sm:h-32"
                    >
                      LOADING...
                    </div>
                  </template>
                </ClientOnly>

                <p
                  class="mt-1 min-h-8 text-center text-[11px] font-bold leading-tight text-white sm:text-xs"
                >
                  {{ skill.name }}
                </p>

                <span
                  class="mt-1 font-mono text-[8px] tracking-[0.15em] text-[#33ff00]/50 sm:text-[9px]"
                >
                  ITEM {{ String(index + 1).padStart(2, "0") }}
                </span>
              </div>
            </div>

            <!-- Duplicate inventory set for seamless looping -->
            <div class="skill-marquee-group" aria-hidden="true">
              <div
                v-for="(skill, index) in skills"
                :key="`second-${skill.name}`"
                class="skill-chart-card flex min-w-0 flex-col items-center justify-center border border-[#33ff00]/20 bg-[#0b140e] p-2 sm:p-3"
              >
                <ClientOnly>
                  <div v-if="chartsVisible" class="h-28 w-full min-w-0 sm:h-32">
                    <VChart
                      :option="doughnutOption(skill.score)"
                      autoresize
                      style="height: 100%; width: 100%"
                    />
                  </div>

                  <div
                    v-else
                    class="flex h-28 w-full items-center justify-center sm:h-32"
                  >
                    <div
                      class="h-20 w-20 rounded-full border-[7px] border-white/10 sm:h-24 sm:w-24"
                    ></div>
                  </div>

                  <template #fallback>
                    <div class="h-28 w-full sm:h-32"></div>
                  </template>
                </ClientOnly>

                <p
                  class="mt-1 min-h-8 text-center text-[11px] font-bold leading-tight text-white sm:text-xs"
                >
                  {{ skill.name }}
                </p>

                <span
                  class="mt-1 font-mono text-[8px] tracking-[0.15em] text-[#33ff00]/50 sm:text-[9px]"
                >
                  ITEM {{ String(index + 1).padStart(2, "0") }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom decorative status bar -->
        <div
          class="mt-4 flex items-center justify-between border-t border-[#33ff00]/20 pt-3"
        >
          <span class="font-mono text-[9px] tracking-widest text-white/35">
            <span class="text-[#33ff00]">●</span>
            CONTINUOUS SCAN
          </span>

          <span class="font-mono text-[9px] tracking-widest text-[#33ff00]/60">
            SYSTEM ACTIVE
          </span>
        </div>
      </div>

      <p class="text-center font-mono text-[10px] tracking-widest text-white/30">
        HOVER OVER INVENTORY TO PAUSE MOVEMENT
      </p>
    </section>

    <!-- Yearly knowledge growth -->
    <section class="space-y-6">
      <div>
        <p class="mb-3 font-mono text-xs tracking-[0.3em] text-[#33ff00]">
          SKILL ANALYTICS
        </p>

        <h2 class="text-2xl font-black text-white md:text-3xl">
          KNOWLEDGE
          <span class="text-[#33ff00]">GROWTH.</span>
        </h2>

        <p class="mt-3 text-sm leading-7 text-white/55">
          Tracking the development of my technical knowledge across different
          IT disciplines throughout the years.
        </p>
      </div>

      <div
        class="rounded-2xl border border-[#33ff00]/20 bg-[#0a100d] p-4 md:p-6"
      >
        <ClientOnly>
          <div class="h-[420px] min-w-0 w-full">
            <VChart
              :option="progressOption"
              autoresize
              style="height: 100%; width: 100%"
            />
          </div>

          <template #fallback>
            <div
              class="flex h-[420px] items-center justify-center font-mono text-xs text-white/40"
            >
              Loading chart...
            </div>
          </template>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Retro inventory frame */
.skill-inventory {
  box-shadow:
    0 0 18px rgba(51, 255, 0, 0.05),
    inset 0 0 25px rgba(51, 255, 0, 0.025);
}

/* Hide anything outside the scrolling inventory */
.skill-marquee-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Fade the left and right edges */
.skill-marquee-viewport::before,
.skill-marquee-viewport::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 12px;
  z-index: 2;
  pointer-events: none;
}

.skill-marquee-viewport::before {
  left: 0;
  background: linear-gradient(to right, #070d09, transparent);
}

.skill-marquee-viewport::after {
  right: 0;
  background: linear-gradient(to left, #070d09, transparent);
}

/* Two identical inventory sets create the seamless loop */
.skill-marquee-track {
  display: flex;
  width: 400%;
  transform: translateX(0);
  will-change: transform;
}

.skill-marquee-track.is-running {
  animation: inventory-scroll 38s linear infinite;
}

/* Pause the continuous movement when hovered */
.skill-marquee-viewport:hover .skill-marquee-track.is-running {
  animation-play-state: paused;
}

/*
  Each group is twice the viewport width.
  Six columns and two rows allow three columns
  and two rows to be visible at once.
*/
.skill-marquee-group {
  flex: 0 0 50%;
  width: 50%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 10px;
  min-width: 0;
}

/* Smooth continuous movement */
@keyframes inventory-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* Individual inventory card entrance */
.skill-chart-card-enter {
  animation: skill-card-reveal 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes skill-card-reveal {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smaller screens */
@media (max-width: 640px) {
  .skill-marquee-group {
    gap: 7px;
  }

  .skill-marquee-track.is-running {
    animation-duration: 32s;
  }
}

/* Respect reduced-motion accessibility preferences */
@media (prefers-reduced-motion: reduce) {
  .skill-marquee-track.is-running {
    animation: none;
    transform: none;
  }

  .skill-chart-card-enter {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
