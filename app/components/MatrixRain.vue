
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let canvas: HTMLCanvasElement | null = null
let context: CanvasRenderingContext2D | null = null

let animationFrame = 0
let lastFrameTime = 0

const fontSize = 14
const columnSpacing = 9
const frameInterval = 35

let columns = 0
let drops: number[] = []

const characters = ['0', '1']

function initializeMatrix() {
  if (!canvas || !context) return

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)

  canvas.width = Math.floor(window.innerWidth * pixelRatio)
  canvas.height = Math.floor(window.innerHeight * pixelRatio)

  canvas.style.width = '100%'
  canvas.style.height = '100%'

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  // More columns create a denser Matrix background.
  columns = Math.floor(window.innerWidth / columnSpacing) + 2

  drops = []

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100
  }

  context.clearRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
  )
}

function drawMatrix() {
  if (!canvas || !context) return

  // Preserve previous frames to create fading trails.
  context.fillStyle = 'rgba(5, 8, 7, 0.15)'
  context.fillRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight,
  )

  // Original glowing green appearance.
  context.fillStyle = '#00FF41'
  context.shadowBlur = 12
  context.shadowColor = '#00FF41'
  context.font = `900 ${fontSize}px monospace`

  for (let i = 0; i < columns; i++) {
    const character =
      characters[Math.floor(Math.random() * characters.length)] ?? '0'

    const x = (i - 0.5) * columnSpacing
    const y = (drops[i] ?? 0) * fontSize

    context.fillText(character, x, y)

    if (
      y > window.innerHeight &&
      Math.random() > 0.975
    ) {
      drops[i] = 0
    }

    drops[i] = (drops[i] ?? 0) + 1
  }

  context.shadowBlur = 0
}

function animate(timestamp: number) {
  if (timestamp - lastFrameTime >= frameInterval) {
    drawMatrix()
    lastFrameTime = timestamp
  }

  animationFrame = window.requestAnimationFrame(animate)
}

function handleResize() {
  initializeMatrix()
}

onMounted(() => {
  canvas = document.getElementById(
    'matrix-rain',
  ) as HTMLCanvasElement | null

  if (!canvas) return

  context = canvas.getContext('2d')

  if (!context) return

  initializeMatrix()

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  )

  if (!prefersReducedMotion.matches) {
    lastFrameTime = 0
    animationFrame = window.requestAnimationFrame(animate)
  }

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <canvas
    id="matrix-rain"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full"
    aria-hidden="true"
  />
</template>
