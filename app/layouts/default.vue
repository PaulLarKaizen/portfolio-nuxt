
<template>
  <div
    class="relative isolate flex min-h-screen flex-col bg-[#050807] text-white"
  >
    <!-- Matrix animated background -->
    <MatrixRain />

    <!-- Main website content -->
    <div class="relative z-10 flex flex-1 flex-col">
      <Navbar />

      <!-- Mobile: hamburger above content -->
      <!-- Desktop: sidebar beside content -->
      <div class="flex flex-1 flex-col pt-24 lg:flex-row">
        <Sidebar />

        <main class="min-w-0 flex-1 px-5 py-8 md:px-10">
          <slot />
        </main>
      </div>

      <Footer />
    </div>
  </div>
</template>
