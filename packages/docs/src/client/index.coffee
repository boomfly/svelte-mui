import '@fortawesome/fontawesome-free/css/all.css'
import './images/favicon.ico'

import Index from './index.svelte'

app = new Index {
  target: document.getElementById('app')
  props: {}
  hydrate: true
}

export default app
