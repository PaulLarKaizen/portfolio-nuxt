
<template>
  <div class="relative isolate min-h-screen bg-[#050807] text-white">
    <!-- Matrix animated background -->
    <MatrixRain />

    <!-- Main website content -->
    <div class="relative z-10 min-h-screen">
      <Navbar />

      <div class="flex pt-24">
        <Sidebar />

        <main class="min-w-0 flex-1 px-5 py-8 md:px-10">
          <slot />
        </main>
      </div>

      <Footer />
    </div>
  </div>
</template>
