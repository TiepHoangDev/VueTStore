import { createApp } from 'vue';
import App from './App.vue'
import mystate from './store/howToUse';

const app = createApp(App);
app.use(mystate)
app.mount('#app')
