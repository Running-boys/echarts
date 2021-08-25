<template>
  <EchartsTemp :options="options" :height="'100%'" ref="pie"  />
</template>

<script>
import EchartsTemp from "../EchartsTemp";
import { pieOptions} from "../Options/app";

export default {
  name: "Pie",
  components:{
    EchartsTemp
  },
  data(){
    return {
      options: pieOptions
    }
  },
  methods:{
      changeResize(){
        console.log(this.$refs.pie.chart.resize())
      }
  }
}
</script>

<style scoped>

</style>
