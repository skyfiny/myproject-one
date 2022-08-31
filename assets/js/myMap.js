(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var mydata = [
    {name: '北京',value: '31036341' },{name: '天津',value: '9041622' },
    {name: '上海',value: '3911940' },{name: '重庆',value: '3605536' },
    {name: '河北',value: '8432496' },{name: '河南',value: '10295514' },
    {name: '云南',value: '4784691' },{name: '辽宁',value: '7519198' },
    {name: '黑龙江',value: '6683192' },{name: '湖南',value: '7120633' },
    {name: '安徽',value: '33408639' },{name: '山东',value: '8828903' },
    {name: '新疆',value: '6349179' },{name: '江苏',value: '7225701' },
    {name: '浙江',value: '3828895' },{name: '江西',value: '4662035' },
    {name: '湖北',value: '8731888' },{name: '广西',value: '10842435' },
    {name: '甘肃',value: '11548762' },{name: '山西',value: '5099711' },
    {name: '内蒙古',value: '5490446' },{name: '陕西',value: '4252984' },
    {name: '吉林',value: '4709763' },{name: '福建',value: '10872351' },
    {name: '贵州',value: '5679385' },{name: '广东',value: '21705548' },
    {name: '青海',value: '3666288' },{name: '西藏',value: '2769337' },
    {name: '四川',value: '7209134' },{name: '宁夏',value: '2586676' },
    {name: '海南',value: '1363591' }
  ];
  var optionMap = {
    backgroundColor: 'rgba(128, 128, 128, 0)',
    title: {
      text: '省份关注量',
      textStyle:{
        color:'white'
      },
      subtext: '',
      x:'center'
    },
    tooltip : {
      trigger: 'item'
    },

    //左侧小导航图标
    visualMap: {
      show : true,
      x: 'left',
      y: 'center',
      textStyle:{
        color:'white'
      },
      splitList: [
        {start: 31600000, end:35000000},{start: 28200000, end: 31600000},
        {start: 24800000, end:28200000},{start: 21400000, end: 24800000},
        {start: 18000000, end:21400000},{start: 14600000, end: 18000000},
        {start: 11200000, end: 14600000},{start: 7800000, end: 11200000},
        {start: 4400000, end: 7800000},{start: 1000000, end: 4400000},

      ],
      color: ['#8B0000','#CD5C5C','#F08080','#FF7F50','#e6ac53','#5475f5', '#9feaa5', '#85daef','#74e2ca', '#9fb5ea']
    },

    //配置属性
    series: [{
      name: '数据',
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //省份名称
        },
        emphasis: {
          show: false
        }
      },
      data:mydata  //数据
    }]
  };
  myChart.setOption(optionMap);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
