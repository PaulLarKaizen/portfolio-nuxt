
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = withDefaults(
  defineProps<{
    text: string;
    delay?: number;
  }>(),
  {
    delay: 100,
  },
);

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/[]{}";

function generateScrambledText() {
  return [...props.text]
    .map((character) => {
      if (character === " ") return " ";

      return characters[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");
}

const displayedText = ref(generateScrambledText());

let animationTimer: ReturnType<typeof setInterval> | undefined;
let startTimer: ReturnType<typeof setTimeout> | undefined;

function scrambleText() {
  const totalFrames = 28;
  let frame = 0;

  animationTimer = setInterval(() => {
    frame++;

    const revealedCount = Math.floor(
      (frame / totalFrames) * props.text.length,
    );

    displayedText.value = [...props.text]
      .map((character, index) => {
        if (character === " ") return " ";
        if (index < revealedCount) return character;

        return characters[
          Math.floor(Math.random() * characters.length)
        ];
      })
      .join("");

    if (frame >= totalFrames) {
      if (animationTimer) clearInterval(animationTimer);
      displayedText.value = props.text;
    }
  }, 32);
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (prefersReducedMotion.matches) {
    displayedText.value = props.text;
    return;
  }

  startTimer = setTimeout(scrambleText, props.delay);
});

onBeforeUnmount(() => {
  if (startTimer) clearTimeout(startTimer);
  if (animationTimer) clearInterval(animationTimer);
});
</script>

<template>
  <span :aria-label="text">
    <span aria-hidden="true">{{ displayedText }}</span>
  </span>
</template>
