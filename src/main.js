import { createApp } from 'vue'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import './styles.css'
import App from './App.vue'

globalThis.GLightbox = GLightbox

createApp(App).mount('#app')
