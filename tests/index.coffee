# import 'materialize-css/js/waves'
import '@fortawesome/fontawesome-free/css/all.css'

import '../dist/browser/index.css'
import App from './Test.svelte'

app = new App {
	target: document.getElementById('app')
	props: {
	}
}

export default app
