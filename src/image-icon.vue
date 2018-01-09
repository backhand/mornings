<template>
<div class="image-icon" :style="style"></div>
</template>

<script>
export default {
  props: ['size', 'url', 'offset-x', 'offset-y', 'active'],
  data: function() {
    var data = {
      style: {
        width: this.size + 'px',
        height: this.size + 'px',
        'background-image': 'url(' + this.url + ')'
      }
    };
    if (this.active) {
      data.style.border = '3px solid #ffd700';
    }
    return data;
  }
}
</script>

<style scoped>
.image-icon {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 500px;
  margin-left: -50px;
}
</style>
