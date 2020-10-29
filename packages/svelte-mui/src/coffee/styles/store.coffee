import {onMount, afterUpdate, setContext} from 'svelte'
import {writable} from 'svelte/store'

export currentTheme = writable ''
