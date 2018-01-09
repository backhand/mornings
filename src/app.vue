<template>
  <div id="app">
    <span>{{ msg }}</span>
    <clock>Klokken er nu:</clock>
    <timeline :items="items"></timeline>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:  function() {
    return {
      msg: 'Godmorgen Alma og Lucia!',
      items: [{
        offset: '06:50',
        text: 'Ud af fjerene',
        image: './dist/pug.jpg'
      },{
        offset: '06:55',
        text: 'Tøj på',
        image: './dist/pug-dressed.jpg'
      },{
        offset: '07:00',
        text: 'Spis morgenmad',
        image: './dist/pug-eat.jpg'
      },{
        offset: '07:20',
        text: 'Tisse af ',
        image: './dist/pug-toilet.jpg'
      },{
        offset: '07:25',
        text: 'Børst tænder',
        image: './dist/pug-toothbrush.jpg'
      },{
        offset: '07:30',
        text: 'Overtøj på',
        image: './dist/pug-jacket.jpg'
      },{
        offset: '07:35',
        text: 'Ud af døren',
        image: './dist/pug-bike.jpg'
      }/*,{
        offset: '8:00',
        text: 'Timen starter'
      }*/]
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
