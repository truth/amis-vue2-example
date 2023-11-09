<template>
  <div id="app">
    <HelloWorld  msg="hello"></HelloWorld>
    <AmisEditor
      id="editorName"
      theme="cxd"
      className="is-fixed"
      :preview="isPreview"
      :isMobile="isMobile"
      @onChange="onChange"
      :value="schema"
     />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AmisEditor from "./components/AmisEditor/index.vue";
import "amis-ui/lib/themes/cxd.css";
import "amis-ui/lib/themes/ang.css";
import "amis-editor/dist/style.css";
export default {
  name: 'App',
  components: {
    HelloWorld,
    AmisEditor,
  },
   data() {
    return {
      isPreview: false,
      isMobile: false,
      schema: {
        type: "page",
        title: "23232",
        body: [
          {
            type: "form",
            title: "表单",
            body: [
              {
                label: "文本框文本框文本框文本框",
                type: "input-text",
                name: "text",
                id: "u:05a2a8b17444",
              },
            ],
            id: "u:977658ae7520",
            rules: [],
            submitText: "提交",
            actions: [
              {
                type: "button-group",
                id: "u:85beb2f89589",
              },
            ],
            mode: "horizontal",
          },
        ],
        id: "u:2ee616f71890",
        aside: [],
        regions: ["body"],
        pullRefresh: {
          disabled: true,
        },
        asideResizor: false,
        asideSticky: true,
      },
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
      console.log("hell0");
    },
  },
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
