<script>
  import Link from '../../lib/Link.svelte'

  $effect(() => {
    document.title = 'Hello, World — blanc'
  })
</script>

<div class="mx-auto min-h-svh max-w-2xl px-6 py-14 sm:px-10 xl:px-20">
  <nav>
    <Link to="/blog" class="text-sm text-text/50 hover:text-text">← All posts</Link>
  </nav>

  <header class="mt-8 space-y-3">
    <h1 class="text-2xl font-medium tracking-tight sm:text-3xl">Hello, World</h1>
    <p class="text-sm text-text/40">Nov 7, 2026</p>
  </header>

  <article class="mt-10 space-y-5 leading-relaxed sm:mt-14">
    <p> Hello, world! </p>
  </article>
</div>
