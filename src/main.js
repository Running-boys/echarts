import Vue from 'vue'
import App from './App.vue'

import {eventBus} from "./utils/bus";

Vue.prototype.$bus = eventBus;

import VueDraggableResizableOs from 'vue-draggable-resizable-os'
import 'vue-draggable-resizable-os/lib/vue-draggable-resizable-os.css'
Vue.use(VueDraggableResizableOs)

import '@/icons/index.js'

import Bar from "./components/echarts/Bar";
import Pie from "./components/echarts/Pie";
import HelloWorld from "./components/HelloWorld";

Vue.component('Bar',Bar)
Vue.component('Pie',Pie)
Vue.component('HelloWorld',HelloWorld)

import VueParticles from "vue-particles";
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
