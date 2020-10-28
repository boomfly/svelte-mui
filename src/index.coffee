# import 'materialize-css/js/waves'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './Docs.svelte'

app = new App {
	target: document.getElementById('app')
	props: {
	}
}

export default app
