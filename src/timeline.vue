<template>
  <div class="timeline">
    <div class="timer" :style="timerStyle"></div>
    <div class="items">
      <timeline-item v-for="item, index in items" :item="item" :index="index" class="timeline-item" :style="timelineItemStyle[index]"></timeline-item>
    </div>
  </div>
</template>

<script>
import dateUtils from './date-utils';
export default {
  name: 'timeline',
  props: ['start', 'end', 'items'],
  data: function() {
    var data = {
      timerStyle: {
        width: 0
      },
      timelineItemStyle: [],
      isActive: []
    };
    
    return data;
  },
  computed: {
    start: function() {
      return this.items[0].offset;
    },
    end: function() {
      return this.items[this.items.length - 1].offset;
    }
  },
  created: function() {
    var startTime = dateUtils.getTime(this.start);
    var endTime = dateUtils.getTime(this.end);
    var timeInterval = endTime - startTime;

    var vm = this;
    setInterval(function() {
      var now = Date.now();
      vm.timerStyle.width = 100 * Math.max(0, Math.min(1, (now - startTime) / timeInterval)) + '%';

      // this.items.forEach(function(item, index) {
      //   var time = dateUtils.getTime(item.offset);
      //   var isLast = index === vm.items.length - 1;
      //   var nextItemTime = isLast ? Math.infity : dateUtils.getTime(vm.items[index + 1].offset);

      //   var isCurrentItemActive = now > time && now < nextItemTime;
      //   isActive[index] = true; //isCurrentItemActive;
      // });
    }, 1000);

    this.timelineItemStyle = this.items.map(function(item, index) {
      var time = dateUtils.getTime(item.offset);
      var isLast = index === vm.items.length - 1;
      
      if (isLast) {
        return {
          right: '-82px'
        };
      } else {
        return {
          left: (100 * Math.min(1, (time - startTime) / timeInterval)) + '%'
        };
      }
    });
  }
}
</script>


<style scoped>
.timeline {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 10%;
}
.timer {
  background-color: #CCC;
  height: 8px;
  width: 0px;
}
.timeline .times {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.timeline .items {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}

</style>
