
<script setup lang="ts">
import { computed } from "vue";
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const route = useRoute();

const errorCode = computed(() => props.error?.statusCode || 500);

const errorTitle = computed(() => {
  switch (errorCode.value) {
    case 404:
      return "TARGET NOT FOUND";
    case 403:
      return "ACCESS DENIED";
    case 401:
      return "AUTHENTICATION REQUIRED";
    case 500:
      return "INTERNAL SYSTEM FAILURE";
    default:
      return "SYSTEM INTERRUPTED";
  }
});

const errorDescription = computed(() => {
  switch (errorCode.value) {
    case 404:
      return "The requested resource could not be located in the system.";
    case 403:
      return "Your request was blocked because access to this resource is restricted.";
    case 401:
      return "Authentication is required before this resource can be accessed.";
    case 500:
      return "An unexpected internal error interrupted the requested operation.";
    default:
      return "An unexpected error interrupted the requested operation.";
  }
});

const attemptedPath = computed(() => route.fullPath || "/unknown");
</script>

<template>
  <main
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050907] px-5 py-24 text-white"
  >
    <!-- Background effects -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(51,255,0,0.09),transparent_65%)]"
    />

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(51,255,0,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(51,255,0,0.35)_1px,transparent_1px)] [background-size:45px_45px]"
    />

    <!-- Main error panel -->
    <section class="relative z-10 w-full max-w-3xl">
      <div
        class="overflow-hidden rounded-3xl border border-[#33ff00]/30 bg-[#080e0a]/90 shadow-[0_0_35px_rgba(51,255,0,0.10),0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        <!-- Terminal header -->
        <div
          class="flex items-center justify-between border-b border-[#33ff00]/20 bg-[#0b130d] px-5 py-4 sm:px-7"
        >
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span class="h-2.5 w-2.5 rounded-full bg-[#33ff00] shadow-[0_0_8px_rgba(51,255,0,0.8)]" />
          </div>

          <p class="font-mono text-[0.6rem] tracking-[0.2em] text-[#33ff00]/60 sm:text-xs">
            SYSTEM_EXCEPTION.exe
          </p>

          <span class="font-mono text-[0.6rem] text-red-400 sm:text-xs">
            CRITICAL
          </span>
        </div>

        <!-- Error content -->
        <div class="px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span class="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-red-400">
              SYSTEM ERROR DETECTED
            </span>
          </div>

          <!-- Dynamic error code -->
          <h1
            class="font-mono text-8xl font-black leading-none tracking-tighter text-[#33ff00] drop-shadow-[0_0_25px_rgba(51,255,0,0.4)] sm:text-9xl"
          >
            {{ errorCode }}
          </h1>

          <div
            class="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-[#33ff00] to-transparent"
          />

          <h2 class="font-mono text-lg font-bold tracking-[0.12em] text-white sm:text-2xl">
            {{ errorTitle }}
          </h2>

          <p class="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            {{ errorDescription }}
          </p>

          <!-- Diagnostic information -->
          <div
            class="mx-auto mt-9 max-w-xl rounded-xl border border-[#33ff00]/15 bg-black/40 p-5 text-left"
          >
            <p class="mb-4 font-mono text-xs font-bold tracking-widest text-[#33ff00]">
              // SYSTEM DIAGNOSTICS
            </p>

            <div class="space-y-3 font-mono text-xs sm:text-sm">
              <div class="flex flex-wrap justify-between gap-2">
                <span class="text-gray-500">STATUS_CODE</span>
                <span class="text-red-400">{{ errorCode }}</span>
              </div>

              <div class="flex flex-wrap justify-between gap-2">
                <span class="text-gray-500">REQUEST_PATH</span>
                <span class="max-w-[65%] break-all text-gray-300">
                  {{ attemptedPath }}
                </span>
              </div>

              <div class="flex flex-wrap justify-between gap-2">
                <span class="text-gray-500">SYSTEM_STATUS</span>
                <span class="text-red-400">INTERRUPTED</span>
              </div>
            </div>
          </div>

          <!-- Return home -->
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              class="group flex w-full items-center justify-center gap-3 rounded-xl border border-[#33ff00]/60 bg-[#33ff00]/10 px-7 py-4 font-mono text-xs font-black tracking-widest text-[#33ff00] shadow-[0_0_15px_rgba(51,255,0,0.12)] transition-all duration-300 hover:border-[#33ff00] hover:bg-[#33ff00] hover:text-black hover:shadow-[0_0_25px_rgba(51,255,0,0.35)] sm:w-auto"
              @click="clearError({ redirect: '/' })"
            >
              <span class="transition-transform duration-300 group-hover:-translate-x-1">
                &lt;
              </span>
              RETURN TO BASE
            </button>
          </div>
        </div>

        <!-- Terminal footer -->
        <div
          class="flex flex-col items-center justify-between gap-2 border-t border-[#33ff00]/15 bg-[#080d09] px-6 py-4 sm:flex-row"
        >
          <p class="font-mono text-[0.6rem] tracking-wider text-gray-600">
            CYRIL JOHN PAUL LARGA // PORTFOLIO
          </p>

          <p class="font-mono text-[0.6rem] tracking-wider text-[#33ff00]/50">
            CONNECTION TERMINATED _
          </p>
        </div>
      </div>

      <p class="mt-6 text-center font-mono text-[0.6rem] tracking-[0.2em] text-gray-600">
        END OF TRANSMISSION
      </p>
    </section>
  </main>
</template>
