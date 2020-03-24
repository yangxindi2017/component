$(function(){
var myChart = echarts.init(document.getElementById('echarts'));
console.log('hello')
// 指定图表的配置项和数据
var option = {
  title:{
    text:'JavaScript语言排名变化'
  },
  tooltip:{
  },
  xAxis: {
        data: [2000,2005,2010,2015,2020]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'排名',
        data: [6,9,8,8,7],
        type: 'line'
    }]



};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
  
});
