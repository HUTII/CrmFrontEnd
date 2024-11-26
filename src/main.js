/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Router
import { router } from './router'

import axios from 'axios'

import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(router).use(pinia)

registerPlugins(app)

app.provide('$axios', axios)

app.mount('#app')
