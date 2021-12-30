import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/style/global/global.css'
import VueApexCharts from "vue3-apexcharts";
import router from './router'


createApp(App).use(router).use(VueApexCharts).mount('#app')
