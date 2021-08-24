<template>
  <EchartsTemp :options="options" :height="'100%'" />
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

  }
}
</script>

<style scoped>

</style>
