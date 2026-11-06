<script>
  import { router } from './lib/router.svelte'
  import Home from './pages/Home.svelte'
  import Blog from './pages/Blog.svelte'
  import HelloWorldPost from './pages/posts/HelloWorldPost.svelte'
  import NotFound from './pages/NotFound.svelte'
</script>

{#if router.route === 'blog'}
  <Blog />
{:else if router.route === 'blog/hello-world'}
  <HelloWorldPost />
{:else if router.route === ''}
  <Home />
{:else}
  <NotFound />
{/if}
