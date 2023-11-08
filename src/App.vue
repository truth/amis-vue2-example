<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <vue-amis-sdk
      id='editorName'
      theme='cxd'
      className='is-fixed'
      :preview='isPreview'
      :isMobile='isMobile'
      @onChange='onChange'
      :value='schema'
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      isPreview: false,
      isMobile: false,
      schema: {}
    }
  },
  methods: {
    onChange(e) {
      console.log(e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
