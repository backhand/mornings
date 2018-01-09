<template>
  <div :class="classes">
    <span class="timeline-item-offset">{{ item.offset }}</span>
    <span class="timeline-item-text">{{ item.text }}</span>
    <image-icon :url="item.image" :size="100"></image-icon>
  </div>
</template>

<script>
export default {
  name: 'timeline-item',
  props: ['item'],
  data: function() {
    var data = {
      style: {
        left: '0%'
      },
      classes: []
    };
    return data;
  },
  created: function() {
    window.bus.$on('time-update', function(data) {
      // console.log(`timeline-item.vue:23 - data`, data);
    });
  }
}
</script>


<style scoped>
.timeline-item {
  /*padding: 6px;*/
  height: 200px;
  border-left: 1px dotted #a9a9a9;
  position: absolute;
  flex-flow: column nowrap;
  align-items: center;
  box-sizing: border-box;
}
.timeline-item-offset {
  margin-left: -30px;
  /*border: 1px solid;*/
  padding: 5px;
  width: 40px;
  background: #fff;
}
.timeline-item-text {
  margin-left: -80px;
  text-align: center;
  border: 1px solid;
  padding: 5px;
  width: 150px;
  background: #fff;
}
.timeline-item span, .timeline-item .image-icon {
  display: block;
}
.timeline-item:nth-child(even) {
  flex-flow: column-reverse nowrap;
  top: -200px;
}
.timeline-item:nth-child(odd) {
  padding-top: 35px;
}
</style>
