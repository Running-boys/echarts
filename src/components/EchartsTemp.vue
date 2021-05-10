<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { debounce } from '../utils';
require('echarts/theme/vintage');
require('echarts/theme/dark');
require('echarts/theme/myTheme');
require('echarts/map/js/china');
require('echarts/map/js/world');
require('echarts/map/js/worldAndChina');
export default {
  name: "EchartsTemp",
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options:{
      type: Object,
      require:true
    }
  },
  data(){
    return {
      chart:null,
    }
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 10)
    window.addEventListener('resize', this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener('resize', this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods:{
    initChart(){
      this.chart = echarts.init(this.$el,);
      this.chart.setOption(this.options);
      this.addEvent();
    },
    addEvent(){
      this.chart.on('click',(params)=>{
        this.$emit('chart-click',params);
      })
    },
    changeChart(theme,options){
        this.chart.dispose();
        this.chart = echarts.init(this.$el,theme);
        this.chart.setOption(options);
        this.addEvent();
    }
  }
}
</script>

<style scoped>

</style>
