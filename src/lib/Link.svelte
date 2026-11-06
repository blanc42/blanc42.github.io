<script>
  import { href, navigate } from './router.svelte'

  let { to, children, ...rest } = $props()

  let target = $derived(href(to))

  function onClick(event) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return

    event.preventDefault()
    navigate(to)
  }
</script>

<a {...rest} href={target} onclick={onClick}>
  {@render children()}
</a>
