
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let canvas: HTMLCanvasElement | null = null
let animationFrame = 0
let drops: number[] = []
let context: CanvasRenderingContext2D | null = null

const fontSize = 16
const characters = ['0', '1']

function resizeCanvas() {
  if (!canvas || !context) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const columns = Math.ceil(canvas.width / fontSize)

  drops = Array.from({ length: columns }, () => 
    Math.floor(Math.random() * -30),
  )
}

function drawMatrix() {
  if (!canvas || !context) return

  context.fillStyle = 'rgba(5, 8, 7, 0.08)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.font = `${fontSize}px monospace`
  context.fillStyle = '#33ff00'

  for (let i = 0; i < drops.length; i++) {
    const character =
      characters[Math.floor(Math.random() * characters.length)] ?? '0'

    const x = i * fontSize
    const y = (drops[i] ?? 0) * fontSize

    context.fillText(character, x, y)

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    } else {
      drops[i] = (drops[i] ?? 0) + 1
    }
  }

  animationFrame = window.requestAnimationFrame(drawMatrix)
}

onMounted(() => {
  canvas = document.querySelector('#matrix-rain')

  if (!canvas) return

  context = canvas.getContext('2d')

  if (!context) return

  resizeCanvas()

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  )

  if (!prefersReducedMotion.matches) {
    drawMatrix()
  }

  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  window.cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<template>
  <canvas
    id="matrix-rain"
    class="pointer-events-none fixed inset-0 z-0 h-full w-full"
    aria-hidden="true"
  />
</template>
