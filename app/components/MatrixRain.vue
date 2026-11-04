
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

let canvasWidth = 0;
let canvasHeight = 0;
let columns = 0;
let drops: number[] = [];

const characters = ["0", "1"];

function initializeMatrix() {
  if (!canvas || !context) return;

  const width = document.documentElement.clientWidth;
  const height = window.innerHeight;

  if (width <= 0 || height <= 0) return;

  if (width === canvasWidth && height === canvasHeight) return;

  canvasWidth = width;
  canvasHeight = height;

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const previousDrops = drops;
  columns = Math.floor(width / columnSpacing) + 2;
  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = previousDrops[i] ?? Math.random() * -100;
  }

  clearMatrix();
}

function clearMatrix() {
  if (!context) return;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function drawMatrix() {
  if (!canvas || !context) return;

  context.fillStyle = "rgba(5, 8, 7, 0.15)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

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

    if (y > canvasHeight && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i] = (drops[i] ?? 0) + 1;
  }

  context.shadowBlur = 0;
}

function stopMatrix() {
  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  clearMatrix();
}

function animate(timestamp: number) {
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

function startMatrix() {
  if (!canvas || !context || motionPreference?.matches) return;
  if (animationFrame !== null) return;

  lastFrameTime = 0;
  animationFrame = window.requestAnimationFrame(animate);
}

function handleMotionChange(event: MediaQueryListEvent) {
  if (event.matches) {
    stopMatrix();
  } else {
    initializeMatrix();
    startMatrix();
  }
}

function handleResize() {
  if (!canvas || !context) return;

  const width = document.documentElement.clientWidth;
  const height = window.innerHeight;

  if (width === canvasWidth && height === canvasHeight) return;

  initializeMatrix();
}

onMounted(() => {
  canvas = document.getElementById("matrix-rain") as HTMLCanvasElement | null;

  if (!canvas) return;

  context = canvas.getContext("2d");

  if (!context) return;

  motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  motionPreference.addEventListener("change", handleMotionChange);
  window.addEventListener("resize", handleResize, { passive: true });

  initializeMatrix();

  if (!motionPreference.matches) {
    startMatrix();
  }
});

onUnmounted(() => {
  stopMatrix();

  window.removeEventListener("resize", handleResize);

  motionPreference?.removeEventListener("change", handleMotionChange);
});
</script>

<template>
  <canvas
    id="matrix-rain"
    class="pointer-events-none fixed left-0 top-0 z-0"
    aria-hidden="true"
  ></canvas>
</template>
