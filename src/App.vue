<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="changeChart('type','vintage','pieOptions')">饼图</button>
    <button @click="changeChart('type','dark','appOptions')">柱图</button>
    <button @click="changeChart('type','dark','worldCloud')">字符云</button>
    <button @click="changeChart('type','dark','china')">中国地图</button>
    <button @click="changeChart('type','dark','world')">世界地图</button>

    <br />
    <button @click="changeChart('theme','vintage')">改变主题vintage</button>
    <button @click="changeChart('theme','dark')">改变主题dark</button>
    <button @click="changeChart('theme','myTheme')">改变主题myTheme</button>
    <EchartsTemp ref="echart" :options="options" @chart-click="chartClick" />


  </div>
</template>
<script>
import EchartsTemp from "./components/EchartsTemp";
import { appOptions,pieOptions,worldCloud,china,world,worldAndChina } from  './components/Options/app';
import { encrypt,decrypt } from './utils/rsaEncrypt';
export default {
  name: 'App',
  data(){
    return {
      options:appOptions
    }
  },
  methods:{
    chartClick(params){
      console.log(params);
      console.log(encrypt('90'));
      console.log(decrypt(encrypt('90')));
    },
    changeChart(type,param,val){
      if(type==='type'){
        this.options = val === 'pieOptions' ? pieOptions :  val === 'appOptions' ? appOptions : worldCloud;
        this.options = china
        this.options = world
        this.options = worldAndChina
      }
      this.$refs.echart.changeChart(param,this.options);
    }
  },
  components: {
    EchartsTemp
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
