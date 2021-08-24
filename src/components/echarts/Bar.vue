<template>
  <EchartsTemp :options="options" :height="'100%'" />
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
  }
}
</script>

<style scoped>

</style>
