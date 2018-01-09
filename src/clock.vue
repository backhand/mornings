<template>
  <div class="clock"><span class="text"><slot></slot></span><br/><span class="time">{{ time }}</span></div>
</template>

<script>
export default {
  name: 'clock',
  data: function(x) {
    return {
      time: ''
    };
  },
  created: function() {
    var vm = this;

    function pad(str) {
      var i = parseInt(str, 10);
      if (isNaN(i)) {
        return i;
      }
      return i >= 0 && i < 10 ? '0' + str : str;
    }
    function getTimeString(date) {
      date = date || new Date();
      return [date.getHours(), date.getMinutes(), date.getSeconds()].map(pad).join(':');
    }
    vm.time = getTimeString();
    
    setInterval(function() {
      var date = new Date();
      vm.time = getTimeString(date);
      if (window.bus) {
        window.bus.$emit('time-update', {
          formatted: vm.time,
          timestamp: date.getTime()
        })
      }
    }, 1000);
  }
}
</script>

<style scoped>
.clock {
  display: block;
}
.time {
  font-size: 40px;
}
</style>
