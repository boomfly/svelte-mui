import '@fortawesome/fontawesome-free/css/all.css'

import Index from './Index.svelte'

app = new Index {
	target: document.getElementById('app')
	props: {
	}
}

export default app
