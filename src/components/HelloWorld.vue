<template>
  <div class="hello">

  </div>
</template>

<script>
import "amis-ui/lib/themes/cxd.css";
import "amis-ui/lib/themes/ang.css";
import "amis-editor/dist/style.css";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VueAmisSdk: VueAmisSdk,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
