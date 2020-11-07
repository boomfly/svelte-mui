import '@fortawesome/fontawesome-free/css/all.css'
import './images/favicon.ico'

import App from './App.svelte'

app = new App {
  target: document.getElementById('app')
  props: {}
  hydrate: true
}

export default app
