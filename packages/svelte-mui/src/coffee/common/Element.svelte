<script>
	import {onMount} from 'svelte'
	export let tag
  let element
  let isNative
  
  if (typeof tag === 'string') {
    isNative = true
  } else {
    isNative = false

  }
  // $: props = $$props

	onMount( () => {
    if (!isNative) {
      return
    }
		// let element = document.querySelectorAll('.element')[0]
		let newElement = document.createElement(tag.toString() || 'div')
		newElement.innerHTML = element.innerHTML
		element.parentNode.insertBefore(newElement, element.nextSibling)
		element.remove()
	})
</script>

{#if isNative}
  <div bind:this={element} {...$$props}>
    <slot />
  </div>
{:else}
  <svelte:component this={tag} {...$$props}>
    <slot />
  </svelte:component>
{/if}
