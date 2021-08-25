<template>
  <EchartsTemp :options="options" :height="'100%'" ref="bar" />
</template>

<script>
import EchartsTemp from "../EchartsTemp";
import { barOptions } from "../Options/app";

export default {
  name: "Bar",
  components:{
    EchartsTemp
  },
  data(){
    return {
      options: barOptions
    }
  },
  methods:{
    changeResize(){
      console.log(this.$refs.bar.chart.resize())
    }
  }
}
</script>

<style scoped>

</style>
