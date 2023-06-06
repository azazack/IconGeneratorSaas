import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH_0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH_0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
);

app.use(pinia)
app.use(router)

app.mount('#app')
