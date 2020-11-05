import {onMount, afterUpdate, setContext} from 'svelte'
import {writable} from 'svelte/store'

initialValue = 'light'

if document?
  initialValue = document.documentElement.getAttribute('theme')

export currentTheme = writable initialValue
