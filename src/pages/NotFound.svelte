<script>
  import Link from '../lib/Link.svelte'

  const path = decodeURI(window.location.pathname)

  $effect(() => {
    document.title = '404 — blanc'
  })
</script>

<div class="relative mx-auto min-h-svh max-w-2xl overflow-hidden px-6 py-14 sm:px-10 xl:px-20">
  <span
    aria-hidden="true"
    class="pointer-events-none absolute -top-4 right-2 select-none text-[10rem] font-semibold leading-none tracking-tighter text-white/[0.04] sm:text-[14rem]"
  >
    404
  </span>

  <div class="relative">
    <header class="mt-10 space-y-3 sm:mt-14">
      <p class="text-sm font-medium uppercase tracking-widest text-text/50">404</p>
      <h1 class="text-2xl font-medium tracking-tight sm:text-3xl">
        You've wandered off the map
      </h1>
      <p class="text-text/70">The page you're looking for doesn't exist.</p>
    </header>

    <div
      class="mt-10 overflow-x-auto rounded-lg bg-white/5 p-4 font-mono text-sm leading-relaxed"
    >
      <p class="text-text/40">$ get {path}</p>
      <p class="mt-1 text-text/70">
        404 not found<span class="animate-pulse">▍</span>
      </p>
    </div>

    <section class="mt-10">
      <Link
        to="/"
        class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70"
        >← Back home</Link
      >
    </section>
  </div>
</div>
