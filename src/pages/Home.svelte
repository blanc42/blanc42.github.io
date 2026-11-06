<script>
  import { SiGithub, SiRss } from '@icons-pack/svelte-simple-icons'
  import Link from '../lib/Link.svelte'

  $effect(() => {
    document.title = 'blanc'
  })
</script>

<div class="mx-auto min-h-svh max-w-2xl px-6 py-14 sm:px-10 xl:px-20">
  <header class="space-y-3">
    <h1 class="text-2xl font-medium tracking-tight sm:text-3xl">Hi, I am blanc</h1>
    <p class="text-text/70">Maker, Engineer, Explorer</p>
  </header>

  <!-- <section class="mt-10 sm:mt-14">
    <h2 class="text-sm font-medium uppercase tracking-widest text-text/50">Now</h2>
    <p class="mt-3 leading-relaxed">
      Currently working on
      <a href="https://example.com" class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">project one</a>
      and
      <a href="https://example.com" class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">project two</a>.
      Open to interesting work.
    </p>
  </section> -->

  <section class="mt-10 sm:mt-14">
    <ul class="mt-3 space-y-1.5">
      <li>
        <span class="inline-flex items-center gap-1.5">
          <SiRss size={16} />
          <Link
            to="/blog"
            class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">Blog</Link
          >
        </span>
      </li>
      <!-- <li><a href="mailto:you@example.com" class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">you@example.com</a></li> -->
      <li>
        <span class="inline-flex items-center gap-1.5">
          <SiGithub size={16} />
          <a
            href="https://github.com/blanc42"
            class="underline decoration-text/30 underline-offset-4 hover:decoration-text/70">GitHub</a
          >
        </span>
      </li>
    </ul>
  </section>
</div>
