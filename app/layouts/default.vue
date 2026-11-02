
<template>
  <div class="min-h-screen bg-[#050807] text-white">
    <Navbar />

    <div class="flex pt-24">
      <Sidebar />

      <main class="min-w-0 flex-1 px-5 py-8 md:px-10">
        <slot />
      </main>
    </div>

    <Footer />
  </div>
</template>
