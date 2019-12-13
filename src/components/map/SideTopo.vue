<template>
<div class="world" id="world" style="width:100%;height:100%"></div>
</template>

<script>
import 'echarts/map/js/world.js' 
export default {
    name:'SideTopo',
    mounted:function(){
        this.drawMap()
    },
    methods:{
        drawMap(){
            var BJData = this.$common.worldmapData.BJData;

            var geoCoordMap = this.$common.worldmapData.geoCoordMap;
            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push([{
                                coord: fromCoord,
                                value: dataItem[0].value
                            },
                            {
                                coord: toCoord
                            }
                        ]);
                    }
                }
                return res;
            };
   
            var series = [];
            [
                ["上海", BJData]
            ].forEach(function(item) {
                
                series.push({
                        type: "lines",
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.21, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: "arrow", //箭头图标
                            symbolSize: 5 //图标大小
                        },
                        lineStyle: {
                            color: '#F58158',
                            width: 1,
                            opacity: 0.03,
                            curveness: 0.1
                        },

                        data: convertData(item[1])
                    }, {
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        zlevel: 2,
                        rippleEffect: {
                            //涟漪特效
                            period: 4, //动画时间，值越小速度越快
                            brushType: "stroke", //波纹绘制方式 stroke, fill
                            scale: 4 //波纹圆环最大限制，值越大波纹越大
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "right", //显示位置
                                offset: [5, 0], //偏移设置
                                formatter: "{b}" ,//圆环显示文字
                                textStyle: {
                                    color: "#ccc"
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: "circle",
                        symbolSize: function(val) {
                            return 4 + val[2] / 1000; //圆环大小
                        },
                        itemStyle: {
                            normal: {
                                show: false,
                            }
                        },
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[0].name,
                                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                            };
                        })
                    },
                    //被攻击点
                    {
                        type: "scatter",
                        coordinateSystem: "geo",
                        zlevel: 2,
                        rippleEffect: {
                            period: 4,
                            brushType: "stroke",
                            scale: 4
                        },
                        label: {
                            normal: {
                                show: true,
                                position: "right",
                                color: "#00ffff",
                                formatter: "{b}",
                                textStyle: {
                                    color: "#fff"
                                }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: "pin",
                        symbolSize: 30,
                        itemStyle: {
                            normal: {
                                show: true,
                                color: "#9966cc"
                            }
                        },
                        data: [{
                            name: item[0],
                            value: geoCoordMap[item[0]].concat([100])
                        }]
                    }
                );
            });
            var myChart = this.$echarts.init(document.getElementById('world'));
            var option = {
                
                title: {
                    text: '全球交易分布',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: "item",
                    backgroundColor: "#1540a1",
                    borderColor: "#FFFFCC",
                    showDelay: 0,
                    hideDelay: 0,
                    enterable: true,
                    transitionDuration: 0,
                    extraCssText: "z-index:100",
                    formatter: function(params) {
                        //根据业务自己拓展要显示的内容
                        var res = "";
                        var name = params.name;
                        var value = params.value[params.seriesIndex + 1];
                        res =
                            "<span style='color:#fff;'>" +
                            name +
                            "</span><br/>数据：" +
                            value;
                        return res;
                    }
                },
                visualMap: {
                    //图例值控制
                    min: 0,
                    max: 10000,
                    show: false,
                    calculable: true,
                    color: ["#0bc7f3"],
                    textStyle: {
                        color: "#fff"
                    },

                },
                geo: {
                    map: "world",
                    label: {
                        color:'#fff',
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true, //是否允许缩放
                    layoutCenter: ["50%", "50%"], //地图位置
                    layoutSize: "180%",
                    itemStyle: {
                        normal: {
                            areaColor: '#6098d6',
                            borderColor: '#92ecaa'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },

                series: series
            };
            myChart.setOption(option);
        }

    }
}
</script>

<style scoped>
</style>