import Vue from 'vue'
import app from './app.vue'
import clock from './clock.vue'
import timeline from './timeline.vue'
import timelineItem from './timeline-item.vue'
import imageIcon from './image-icon.vue'

Vue.component('clock', clock);
Vue.component('timeline', timeline);
Vue.component('timeline-item', timelineItem);
Vue.component('image-icon', imageIcon);

window.bus = new Vue({});
var vm = new Vue({
  el: '#app',
  render: function(h) { return h(app); },
  data: {
    title: 'God morgen'
  }
});

