<template>
  <div id="app">
<!--    <vue-particles-->
<!--        color="#000"-->
<!--        :particleOpacity="0.7"-->
<!--        :particlesNumber="80"-->
<!--        shapeType="circle"-->
<!--        :particleSize="4"-->
<!--        linesColor="#f0f"-->
<!--        :linesWidth="1"-->
<!--        :lineLinked="true"-->
<!--        :lineOpacity="0.8"-->
<!--        :linesDistance="150"-->
<!--        :moveSpeed="3"-->
<!--        :hoverEffect="true"-->
<!--        hoverMode="grab"-->
<!--        :clickEffect="true"-->
<!--        clickMode="push"-->
<!--    >-->

<!--    </vue-particles>-->

    <div style="height: 600px;width: 100%;">
      <vue-draggable-area :data="list" :model="false" ref="area" @resizestop="onResizestop">

      </vue-draggable-area>
    </div>

    <HelloWorld />
    <div class="echarts">
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

      <svg-icon icon-class="eye" @click="a"></svg-icon>

      <EchartsTemp ref="echart" :options="options" @chart-click="chartClick" />
    </div>


  </div>
</template>
<script>
import EchartsTemp from "./components/EchartsTemp";
import { barOptions,pieOptions,worldCloud,china,world,worldAndChina } from  './components/Options/app';
import { encrypt,decrypt } from './utils/rsaEncrypt';
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  data(){
    return {
      options:{},
      theme:'',
      list:[
        {
          id: '1',
          component: 'Bar',
          x: 0,
          y: 0,
          width: 0.2,
          height: 0.5
        },
        {
          id: '2',
          component: 'Pie',
          x: 0.2,
          y: 0,
          width: 0.2,
          height: 0.5
        },
        {
          id: '3',
          component: 'HelloWorld',
          x: 0.4,
          y: 0,
          width: 0.2,
          height: 0.5
        }
      ]
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
    a(){
      this.$bus.$emit('show','0000')
    },
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
    },
    onResizestop(id,list){
      console.log(id,list,this.$refs.area)
    }
  },
  components: {
    EchartsTemp,
    HelloWorld
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
  position: relative;
}
#particles-js{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.echarts{
  z-index: 10;
}
</style>
