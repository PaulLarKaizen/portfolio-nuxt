
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

let canvas: HTMLCanvasElement | null = null;
let context: CanvasRenderingContext2D | null = null;

let animationFrame: number | null = null;
let lastFrameTime = 0;

let motionPreference: MediaQueryList | null = null;

const fontSize = 14;
const columnSpacing = 9;
const frameInterval = 35;

let columns = 0;
let drops: number[] = [];

const characters = ["0", "1"];

// Initialize the Matrix canvas.
function initializeMatrix() {
  if (!canvas || !context) return;

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  columns = Math.floor(window.innerWidth / columnSpacing) + 2;

  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  clearMatrix();
}

// Clear all existing Matrix characters.
function clearMatrix() {
  if (!context) return;

  context.clearRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
  );
}

// Draw the Matrix rain.
function drawMatrix() {
  if (!canvas || !context) return;

  // Preserve previous frames to create fading trails.
  context.fillStyle = "rgba(5, 8, 7, 0.15)";

  context.fillRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
  );

  // Original glowing green appearance.
  context.fillStyle = "#00FF41";
  context.shadowBlur = 12;
  context.shadowColor = "#00FF41";
  context.font = `900 ${fontSize}px monospace`;

  for (let i = 0; i < columns; i++) {
    const character =
      characters[Math.floor(Math.random() * characters.length)] ?? "0";

    const x = (i - 0.5) * columnSpacing;
    const y = (drops[i] ?? 0) * fontSize;

    context.fillText(character, x, y);

    if (
      y > window.innerHeight &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i] = (drops[i] ?? 0) + 1;
  }

  context.shadowBlur = 0;
}

// Stop animation and remove all visible Matrix characters.
function stopMatrix() {
  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  clearMatrix();
}

// Animation loop.
function animate(timestamp: number) {
  // Safety check: stop if reduced motion is enabled.
  if (motionPreference?.matches) {
    stopMatrix();
    return;
  }

  if (timestamp - lastFrameTime >= frameInterval) {
    drawMatrix();
    lastFrameTime = timestamp;
  }

  animationFrame = window.requestAnimationFrame(animate);
}

// Start Matrix animation.
function startMatrix() {
  if (!canvas || !context) return;

  // Do not animate when reduced motion is enabled.
  if (motionPreference?.matches) return;

  // Prevent duplicate animation loops.
  if (animationFrame !== null) return;

  initializeMatrix();

  lastFrameTime = 0;
  animationFrame = window.requestAnimationFrame(animate);
}

// Respond to accessibility preference changes.
function handleMotionChange(event: MediaQueryListEvent) {
  if (event.matches) {
    // Reduced motion enabled: stop immediately.
    stopMatrix();
  } else {
    // Reduced motion disabled: resume Matrix animation.
    startMatrix();
  }
}

// Handle browser resizing.
function handleResize() {
  if (!canvas || !context) return;

  initializeMatrix();

  if (motionPreference?.matches) {
    stopMatrix();
    return;
  }

  if (animationFrame === null) {
    lastFrameTime = 0;
    animationFrame = window.requestAnimationFrame(animate);
  }
}

onMounted(() => {
  canvas = document.getElementById(
    "matrix-rain",
  ) as HTMLCanvasElement | null;

  if (!canvas) return;

  context = canvas.getContext("2d");

  if (!context) return;

  motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  // Listen for changes without requiring a page refresh.
  motionPreference.addEventListener(
    "change",
    handleMotionChange,
  );

  window.addEventListener("resize", handleResize);

  // Start or stop depending on the current preference.
  if (motionPreference.matches) {
    initializeMatrix();
    clearMatrix();
  } else {
    startMatrix();
  }
});

onUnmounted(() => {
  stopMatrix();

  window.removeEventListener("resize", handleResize);

  motionPreference?.removeEventListener(
    "change",
    handleMotionChange,
  );
});
</script>

<template>
  <canvas
    id="matrix-rain"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full"
    aria-hidden="true"
  ></canvas>
</template>
