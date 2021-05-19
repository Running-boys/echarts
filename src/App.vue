<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="changeChart(bar)">柱图</button>
    <button @click="changeChart(pie)">饼图</button>
    <button @click="changeChart(worldCloud)">字符云</button>
    <button @click="changeChart(china)">中国地图</button>
    <button @click="changeChart(world)">世界地图</button>
    <button @click="changeChart(worldAndChina)">世界+中国地图</button>

    <br />
    <button @click="changeTheme('vintage')">改变主题vintage</button>
    <button @click="changeTheme('dark')">改变主题dark</button>
    <button @click="changeTheme('theme')">改变主题myTheme</button>


    <EchartsTemp ref="echart" :options="options" @chart-click="chartClick" />


  </div>
</template>
<script>
import EchartsTemp from "./components/EchartsTemp";
import { barOptions,pieOptions,worldCloud,china,world,worldAndChina } from  './components/Options/app';
import { encrypt,decrypt } from './utils/rsaEncrypt';

export default {
  name: 'App',
  data(){
    return {
      options:{},
      theme:''
    }
  },
  computed:{
    bar(){
      return barOptions;
    },
    pie(){
      return pieOptions;
    },
    worldCloud(){
      return worldCloud;
    },
    china(){
      return china;
    },
    world(){
      return world;
    },
    worldAndChina(){
      return worldAndChina;
    }
  },
  mounted() {
    this.changeChart(this.bar,this.theme);
  },
  methods:{
    chartClick(params){
      console.log(params);
      console.log(encrypt('90'));
      console.log(decrypt(encrypt('90')));
    },
    changeChart(options){
      this.options = options;
      this.$refs.echart.changeChart(this.options,this.options);
    },
    changeTheme(theme){
      this.theme = theme;
      this.$refs.echart.changeChart(this.theme,this.options);
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
