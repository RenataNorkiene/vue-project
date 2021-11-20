import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton";



const app = createApp(App);

app.mount('#app');
app.mount('based-card', BaseCard);
app.mount('based-button', BaseButton)