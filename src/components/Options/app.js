export const appOptions = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};

export const pieOptions = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

export const worldCloud = {
    series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.




        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // If perform layout animation.
        // NOTE disable it will lead to UI blocking when there is lots of words.
        layoutAnimation: true,

        // Global text style
        textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
                // Random color
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
        },
        emphasis: {
            focus: 'self',

            textStyle: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        // Data is an array. Each array item must have name and value property.
        data: [{
            name: 'Farrah Abraham',
            value: 366,
            // Style of single text
            textStyle: {
            }
        }]
    }]
}

export const china = {
    tooltip: {
        show: true
    },
    visualMap: {//左侧颜色值 对应映射值
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: true,
        text: ["高", "低"],
        pieces: [
            {
                gt: 100,
                label: "> 100",
                color: "#7f1100",
            },
            {
                gte: 50,
                lte: 100,
                label: "<=100",
                color: "#ff5428",
            },
            {
                gte: 10,
                lt: 50,
                label: "<=50",
                color: "#ff8c71",
            },
            {
                gte: 1,
                lt: 10,
                label: "<=10",
                color: "#ffd768",
            },
            {
                value: 0,
                color: "#b7d6f3",
            },
        ],
        show: true,
    },
    series: [
        {
            name: "人数",
            type: "map",
            mapType: "china",
            label: {
                normal: {
                    show: true,
                    // fontSize: "12",
                    // color: "#111",
                },
            },
            zoom: 1.5,//放大倍数
            center: [110.97, 35.71], //位置偏移
            roam: true,//放大 缩小 移动
            itemStyle: {
                emphasis: {
                    // areaColor: "#ff6700",
                },
            },
            data: [
                {value: 104, name: '四川'},
                {value: 10, name: '北京'},
            ], //数据
        },
    ],
}

export const world = {
    tooltip: {
        show: true
    },

    geo: {
        map: 'world', //
        nameMap: {
            "Afghanistan": "阿富汗",
            "Angola": "安哥拉",
            "Albania": "阿尔巴尼亚",
            "Algeria": "阿尔及利亚",
            "Argentina": "阿根廷",
            "Armenia": "亚美尼亚",
            "Australia": "澳大利亚",
            "Austria": "奥地利",
            "Azerbaijan": "阿塞拜疆",
            "Bahamas": "巴哈马",
            "Bangladesh": "孟加拉国",
            "Belgium": "比利时",
            "Benin": "贝宁",
            "Burkina Faso": "布基纳法索",
            "Burundi": "布隆迪",
            "Bulgaria": "保加利亚",
            "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
            "Belarus": "白俄罗斯",
            "Belize": "伯利兹",
            "Bermuda": "百慕大群岛",
            "Bolivia": "玻利维亚",
            "Brazil": "巴西",
            "Brunei": "文莱",
            "Bhutan": "不丹",
            "Botswana": "博茨瓦纳",
            "Cambodia": "柬埔寨",
            "Cameroon": "喀麦隆",
            "Canada": "加拿大",
            "Central African Rep.": "中非共和国",
            "Chad": "乍得",
            "Chile": "智利",
            "China": "中国",
            "Colombia": "哥伦比亚",
            "Congo": "刚果",
            "Costa Rica": "哥斯达黎加",
            "Côte d'Ivoire": "科特迪瓦",
            "Croatia": "克罗地亚",
            "Cuba": "古巴",
            "Cyprus": "塞浦路斯",
            "Czech Rep.": "捷克共和国",
            "Dem. Rep. Korea": "韩国",
            "Dem. Rep. Congo": "民主刚果",
            "Denmark": "丹麦",
            "Djibouti": "吉布提",
            "Dominican Rep.": "多米尼加共和国",
            "Ecuador": "厄瓜多尔",
            "Egypt": "埃及",
            "El Salvador": "萨尔瓦多",
            "Eq. Guinea": "赤道几内亚",
            "Eritrea": "厄立特里亚",
            "Estonia": "爱沙尼亚",
            "Ethiopia": "埃塞俄比亚",
            "Falkland Is.": "福克兰群岛",
            "Fiji": "斐济",
            "Finland": "芬兰",
            "France": "法国",
            "French Guiana": "法属圭亚那",
            "Fr. S. Antarctic Lands": "法属南部领地",
            "Gabon": "加蓬",
            "Gambia": "冈比亚",
            "Germany": "德国",
            "Georgia": "佐治亚州",
            "Ghana": "加纳",
            "Greece": "希腊",
            "Greenland": "格陵兰",
            "Guatemala": "危地马拉",
            "Guinea": "几内亚",
            "Guinea-Bissau": "几内亚比绍",
            "Guyana": "圭亚那",
            "Haiti": "海地",
            "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
            "Honduras": "洪都拉斯",
            "Hungary": "匈牙利",
            "Iceland": "冰岛",
            "India": "印度",
            "Indonesia": "印度尼西亚",
            "Iran": "伊朗",
            "Iraq": "伊拉克",
            "Ireland": "爱尔兰",
            "Israel": "以色列",
            "Italy": "意大利",
            "Ivory Coast": "象牙海岸",
            "Jamaica": "牙买加",
            "Japan": "日本",
            "Jordan": "乔丹",
            "Kashmir": "克什米尔",
            "Kazakhstan": "哈萨克斯坦",
            "Kenya": "肯尼亚",
            "Kosovo": "科索沃",
            "Kuwait": "科威特",
            "Kyrgyzstan": "吉尔吉斯斯坦",
            "Laos": "老挝",
            "Lao PDR": "老挝人民民主共和国",
            "Latvia": "拉脱维亚",
            "Lebanon": "黎巴嫩",
            "Lesotho": "莱索托",
            "Liberia": "利比里亚",
            "Libya": "利比亚",
            "Lithuania": "立陶宛",
            "Luxembourg": "卢森堡",
            "Madagascar": "马达加斯加",
            "Macedonia": "马其顿",
            "Malawi": "马拉维",
            "Malaysia": "马来西亚",
            "Mali": "马里",
            "Mauritania": "毛里塔尼亚",
            "Mexico": "墨西哥",
            "Moldova": "摩尔多瓦",
            "Mongolia": "蒙古",
            "Montenegro": "黑山",
            "Morocco": "摩洛哥",
            "Mozambique": "莫桑比克",
            "Myanmar": "缅甸",
            "Namibia": "纳米比亚",
            "Netherlands": "荷兰",
            "New Caledonia": "新喀里多尼亚",
            "New Zealand": "新西兰",
            "Nepal": "尼泊尔",
            "Nicaragua": "尼加拉瓜",
            "Niger": "尼日尔",
            "Nigeria": "尼日利亚",
            "Korea": "朝鲜",
            "Northern Cyprus": "北塞浦路斯",
            "Norway": "挪威",
            "Oman": "阿曼",
            "Pakistan": "巴基斯坦",
            "Panama": "巴拿马",
            "Papua New Guinea": "巴布亚新几内亚",
            "Paraguay": "巴拉圭",
            "Peru": "秘鲁",
            "Republic of the Congo": "刚果共和国",
            "Philippines": "菲律宾",
            "Poland": "波兰",
            "Portugal": "葡萄牙",
            "Puerto Rico": "波多黎各",
            "Qatar": "卡塔尔",
            "Republic of Seychelles": "塞舌尔共和国",
            "Romania": "罗马尼亚",
            "Russia": "俄罗斯",
            "Rwanda": "卢旺达",
            "Samoa": "萨摩亚",
            "Saudi Arabia": "沙特阿拉伯",
            "Senegal": "塞内加尔",
            "Serbia": "塞尔维亚",
            "Sierra Leone": "塞拉利昂",
            "Slovakia": "斯洛伐克",
            "Slovenia": "斯洛文尼亚",
            "Solomon Is.": "所罗门群岛",
            "Somaliland": "索马里兰",
            "Somalia": "索马里",
            "South Africa": "南非",
            "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
            "S. Sudan": "南苏丹",
            "Spain": "西班牙",
            "Sri Lanka": "斯里兰卡",
            "Sudan": "苏丹",
            "Suriname": "苏里南",
            "Swaziland": "斯威士兰",
            "Sweden": "瑞典",
            "Switzerland": "瑞士",
            "Syria": "叙利亚",
            "Tajikistan": "塔吉克斯坦",
            "Tanzania": "坦桑尼亚",
            "Thailand": "泰国",
            "The Kingdom of Tonga": "汤加王国",
            "Timor-Leste": "东帝汶",
            "Togo": "多哥",
            "Trinidad and Tobago": "特立尼达和多巴哥",
            "Tunisia": "突尼斯",
            "Turkey": "土耳其",
            "Turkmenistan": "土库曼斯坦",
            "Uganda": "乌干达",
            "Ukraine": "乌克兰",
            "United Arab Emirates": "阿拉伯联合酋长国",
            "United Kingdom": "大不列颠联合王国",
            "United Republic of Tanzania": "坦桑尼亚联合共和国",
            "United States": "美国",
            "United States of America": "美利坚合众国",
            "Uruguay": "乌拉圭",
            "Uzbekistan": "乌兹别克斯坦",
            "Vanuatu": "瓦努阿图",
            "Venezuela": "委内瑞拉",
            "Vietnam": "越南",
            "West Bank": "西岸",
            "W. Sahara": "西撒哈拉",
            "Yemen": "也门",
            "Zambia": "赞比亚",
            "Zimbabwe": "津巴布韦"
        },
        roam: true, // 是否开启鼠标缩放和平移漫游
        zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
        label: {
            show: true
        },
        itemStyle: { // 地图区域的多边形 图形样式。
            // borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: { // 高亮状态下的多边形和标签样式
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },

    series: [
        {
            name: "人数",
            data: [
                {value: 1048, name: '四川'},
                {value: 1048, name: '北京'},
            ], //数据
        },
    ],
}

export const worldAndChina = {
    tooltip: {
        show: true
    },

    geo: { // 地理坐标系组件用于地图的绘制
        map: 'worldAndChina', //
        nameMap: {
            "Afghanistan": "阿富汗",
            "Angola": "安哥拉",
            "Albania": "阿尔巴尼亚",
            "Algeria": "阿尔及利亚",
            "Argentina": "阿根廷",
            "Armenia": "亚美尼亚",
            "Australia": "澳大利亚",
            "Austria": "奥地利",
            "Azerbaijan": "阿塞拜疆",
            "Bahamas": "巴哈马",
            "Bangladesh": "孟加拉国",
            "Belgium": "比利时",
            "Benin": "贝宁",
            "Burkina Faso": "布基纳法索",
            "Burundi": "布隆迪",
            "Bulgaria": "保加利亚",
            "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
            "Belarus": "白俄罗斯",
            "Belize": "伯利兹",
            "Bermuda": "百慕大群岛",
            "Bolivia": "玻利维亚",
            "Brazil": "巴西",
            "Brunei": "文莱",
            "Bhutan": "不丹",
            "Botswana": "博茨瓦纳",
            "Cambodia": "柬埔寨",
            "Cameroon": "喀麦隆",
            "Canada": "加拿大",
            "Central African Rep.": "中非共和国",
            "Chad": "乍得",
            "Chile": "智利",
            "China": "中国",
            "Colombia": "哥伦比亚",
            "Congo": "刚果",
            "Costa Rica": "哥斯达黎加",
            "Côte d'Ivoire": "科特迪瓦",
            "Croatia": "克罗地亚",
            "Cuba": "古巴",
            "Cyprus": "塞浦路斯",
            "Czech Rep.": "捷克共和国",
            "Dem. Rep. Korea": "韩国",
            "Dem. Rep. Congo": "民主刚果",
            "Denmark": "丹麦",
            "Djibouti": "吉布提",
            "Dominican Rep.": "多米尼加共和国",
            "Ecuador": "厄瓜多尔",
            "Egypt": "埃及",
            "El Salvador": "萨尔瓦多",
            "Eq. Guinea": "赤道几内亚",
            "Eritrea": "厄立特里亚",
            "Estonia": "爱沙尼亚",
            "Ethiopia": "埃塞俄比亚",
            "Falkland Is.": "福克兰群岛",
            "Fiji": "斐济",
            "Finland": "芬兰",
            "France": "法国",
            "French Guiana": "法属圭亚那",
            "Fr. S. Antarctic Lands": "法属南部领地",
            "Gabon": "加蓬",
            "Gambia": "冈比亚",
            "Germany": "德国",
            "Georgia": "佐治亚州",
            "Ghana": "加纳",
            "Greece": "希腊",
            "Greenland": "格陵兰",
            "Guatemala": "危地马拉",
            "Guinea": "几内亚",
            "Guinea-Bissau": "几内亚比绍",
            "Guyana": "圭亚那",
            "Haiti": "海地",
            "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
            "Honduras": "洪都拉斯",
            "Hungary": "匈牙利",
            "Iceland": "冰岛",
            "India": "印度",
            "Indonesia": "印度尼西亚",
            "Iran": "伊朗",
            "Iraq": "伊拉克",
            "Ireland": "爱尔兰",
            "Israel": "以色列",
            "Italy": "意大利",
            "Ivory Coast": "象牙海岸",
            "Jamaica": "牙买加",
            "Japan": "日本",
            "Jordan": "乔丹",
            "Kashmir": "克什米尔",
            "Kazakhstan": "哈萨克斯坦",
            "Kenya": "肯尼亚",
            "Kosovo": "科索沃",
            "Kuwait": "科威特",
            "Kyrgyzstan": "吉尔吉斯斯坦",
            "Laos": "老挝",
            "Lao PDR": "老挝人民民主共和国",
            "Latvia": "拉脱维亚",
            "Lebanon": "黎巴嫩",
            "Lesotho": "莱索托",
            "Liberia": "利比里亚",
            "Libya": "利比亚",
            "Lithuania": "立陶宛",
            "Luxembourg": "卢森堡",
            "Madagascar": "马达加斯加",
            "Macedonia": "马其顿",
            "Malawi": "马拉维",
            "Malaysia": "马来西亚",
            "Mali": "马里",
            "Mauritania": "毛里塔尼亚",
            "Mexico": "墨西哥",
            "Moldova": "摩尔多瓦",
            "Mongolia": "蒙古",
            "Montenegro": "黑山",
            "Morocco": "摩洛哥",
            "Mozambique": "莫桑比克",
            "Myanmar": "缅甸",
            "Namibia": "纳米比亚",
            "Netherlands": "荷兰",
            "New Caledonia": "新喀里多尼亚",
            "New Zealand": "新西兰",
            "Nepal": "尼泊尔",
            "Nicaragua": "尼加拉瓜",
            "Niger": "尼日尔",
            "Nigeria": "尼日利亚",
            "Korea": "朝鲜",
            "Northern Cyprus": "北塞浦路斯",
            "Norway": "挪威",
            "Oman": "阿曼",
            "Pakistan": "巴基斯坦",
            "Panama": "巴拿马",
            "Papua New Guinea": "巴布亚新几内亚",
            "Paraguay": "巴拉圭",
            "Peru": "秘鲁",
            "Republic of the Congo": "刚果共和国",
            "Philippines": "菲律宾",
            "Poland": "波兰",
            "Portugal": "葡萄牙",
            "Puerto Rico": "波多黎各",
            "Qatar": "卡塔尔",
            "Republic of Seychelles": "塞舌尔共和国",
            "Romania": "罗马尼亚",
            "Russia": "俄罗斯",
            "Rwanda": "卢旺达",
            "Samoa": "萨摩亚",
            "Saudi Arabia": "沙特阿拉伯",
            "Senegal": "塞内加尔",
            "Serbia": "塞尔维亚",
            "Sierra Leone": "塞拉利昂",
            "Slovakia": "斯洛伐克",
            "Slovenia": "斯洛文尼亚",
            "Solomon Is.": "所罗门群岛",
            "Somaliland": "索马里兰",
            "Somalia": "索马里",
            "South Africa": "南非",
            "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑德威奇群岛",
            "S. Sudan": "南苏丹",
            "Spain": "西班牙",
            "Sri Lanka": "斯里兰卡",
            "Sudan": "苏丹",
            "Suriname": "苏里南",
            "Swaziland": "斯威士兰",
            "Sweden": "瑞典",
            "Switzerland": "瑞士",
            "Syria": "叙利亚",
            "Tajikistan": "塔吉克斯坦",
            "Tanzania": "坦桑尼亚",
            "Thailand": "泰国",
            "The Kingdom of Tonga": "汤加王国",
            "Timor-Leste": "东帝汶",
            "Togo": "多哥",
            "Trinidad and Tobago": "特立尼达和多巴哥",
            "Tunisia": "突尼斯",
            "Turkey": "土耳其",
            "Turkmenistan": "土库曼斯坦",
            "Uganda": "乌干达",
            "Ukraine": "乌克兰",
            "United Arab Emirates": "阿拉伯联合酋长国",
            "United Kingdom": "大不列颠联合王国",
            "United Republic of Tanzania": "坦桑尼亚联合共和国",
            "United States": "美国",
            "United States of America": "美利坚合众国",
            "Uruguay": "乌拉圭",
            "Uzbekistan": "乌兹别克斯坦",
            "Vanuatu": "瓦努阿图",
            "Venezuela": "委内瑞拉",
            "Vietnam": "越南",
            "West Bank": "西岸",
            "W. Sahara": "西撒哈拉",
            "Yemen": "也门",
            "Zambia": "赞比亚",
            "Zimbabwe": "津巴布韦"
        },
        roam: true, // 是否开启鼠标缩放和平移漫游
        zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
        label: {
            show: true
        },
        itemStyle: { // 地图区域的多边形 图形样式。
            // borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: { // 高亮状态下的多边形和标签样式
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },

    series: [

    ],
}

