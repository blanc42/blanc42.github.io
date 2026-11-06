<script>
  import Link from '../lib/Link.svelte'

  $effect(() => {
    document.title = 'Blog — blanc'
  })
</script>

<div class="mx-auto min-h-svh max-w-2xl px-6 py-14 sm:px-10 xl:px-20">
  <nav>
    <Link to="/" class="text-sm text-text/50 hover:text-text">← Home</Link>
  </nav>

  <header class="mt-8 space-y-3">
    <h1 class="text-2xl font-medium tracking-tight sm:text-3xl">Blog</h1>
    <p class="text-text/70">Notes, writes and small experiments.</p>
  </header>

  <section class="mt-10 sm:mt-14">
    <h2 class="text-sm font-medium uppercase tracking-widest text-text/50">Posts</h2>
    <ul class="mt-3 space-y-1.5">
      <li class="flex items-baseline justify-between gap-4">
        <Link
          to="/blog/hello-world"
          class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">Hello, World</Link
        >
        <span class="text-sm text-text/40">Nov 7, 2026</span>
      </li>
    </ul>
  </section>
</div>
