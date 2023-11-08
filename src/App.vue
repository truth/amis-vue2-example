<template>
  <div id="app">
    <vue-amis-editor
      id='editorName'
      theme='cxd'
      className='is-fixed'
      :is-preview='isPreview'
      :value='schema'
    />
  </div>
</template>

<script>
//mport HelloWorld from './components/HelloWorld.vue'
import "amis-ui/lib/themes/cxd.css";
import "amis-ui/lib/themes/ang.css";
import "amis-editor/dist/style.css";
import VueAmisEditor from 'vue-amis-editor'
export default {
  name: 'App',
  components: {
    //HelloWorld:HelloWorld,
    VueAmisEditor,
  },
  data() {
    return {
      isPreview: false,
      isMobile: false,
      schema:{
        type: 'tasks',
        name: 'tasks',
        items: [
          {
            label: 'hive 任务',
            key: 'hive',
            status: 4,
            remark: '查看详情<a target="_blank" href="http://www.baidu.com">日志</a>。',
          },
          {
            label: '小流量',
            key: 'partial',
            status: 4,
          },
          {
            label: '全量',
            key: 'full',
            status: 4,
          },
        ],
        id: 'u:5f649ab86d6a',
      },
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
