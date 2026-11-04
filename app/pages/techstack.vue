
<script setup lang="ts">
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

// Controls the skill chart dropdown.
const showSkillCharts = ref(false);

// Individual technology doughnut chart.
function doughnutOption(score: number) {
  return {
    animationDuration: 900,
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },
    series: [
      {
        type: "pie",
        radius: ["68%", "84%"],
        center: ["50%", "50%"],
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
          fontSize: 22,
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
  <div class="mx-auto max-w-5xl space-y-8">
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

    <!-- Individual technology proficiency -->
    <section class="space-y-6">
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

      <!-- Expand / Collapse button -->
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-xl border border-[#33ff00]/30 bg-[#0a100d] px-5 py-4 text-left transition-all duration-300 hover:border-[#33ff00]/70 hover:bg-[#33ff00]/5"
        :aria-expanded="showSkillCharts"
        aria-controls="skill-chart-grid"
        @click="showSkillCharts = !showSkillCharts"
      >
        <div class="flex flex-col gap-1">
          <span
            class="font-mono text-xs font-bold tracking-widest text-[#33ff00]"
          >
            {{
              showSkillCharts ? "HIDE SKILL BREAKDOWN" : "VIEW SKILL BREAKDOWN"
            }}
          </span>

          <span class="text-xs text-white/40">
            {{
              showSkillCharts
                ? "11 technologies displayed"
                : "Explore all 11 technology assessments"
            }}
          </span>
        </div>

        <svg
          class="h-5 w-5 shrink-0 text-[#33ff00] transition-transform duration-300"
          :class="{ 'rotate-180': showSkillCharts }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- Expandable doughnut charts -->
      <div
        v-if="showSkillCharts"
        id="skill-chart-grid"
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex min-w-0 flex-col items-center rounded-xl border border-[#33ff00]/20 bg-[#0a100d] p-4 transition-all duration-300 hover:border-[#33ff00]/60"
        >
          <ClientOnly>
            <div class="h-36 min-w-0 w-full">
              <VChart
                :option="doughnutOption(skill.score)"
                autoresize
                style="height: 100%; width: 100%"
              />
            </div>

            <template #fallback>
              <div
                class="flex h-36 w-full items-center justify-center font-mono text-xs text-white/40"
              >
                Loading chart...
              </div>
            </template>
          </ClientOnly>

          <p class="mt-2 text-center text-sm font-bold text-white">
            {{ skill.name }}
          </p>
        </div>
      </div>
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
