// pages/basics/home/home.js
var db = wx.cloud.database()
Page({
  /*** 页面的初始数据 */
  data: {
    videourl:"cloud://test-3g0kpxfp1f4695e8.7465-test-3g0kpxfp1f4695e8-1318791858/basics_video.mp4",
    TabCur: 0,
    scrollLeft:0,
    navList:[
      {id:0,title:"亚运动态",hash:"Box001"},
      {id:1,title:"全球赛事",hash:"Box002"},
      {id:2,title:"专题报道",hash:"Box003"},
      {id:3,title:"亚运文化",hash:"Box004"},
      {id:4,title:"举办城市",hash:"Box005"}
    ],
    winHeight:'100%',
    toView:'Box001',
    nowstatus:'Box001',
    Box001List:[
      {
        id:0,
        _id:"6cc20b0164f044070074241c69b3854c",
        title:"杭州亚运会“赛时一天”综合演练举行",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202308/W020230830625241771375.png",
        info:"8月30日，杭州亚运会“赛时一天”综合演练举行。 在这繁忙的一天里，由杭州亚运会赛事总指挥部（MOC）、各专项指挥中心（除开闭幕式、火炬传递）、分指挥部、专项工作团队（含亚运分村）和所有竞赛场馆团队、独立训练场馆团队按照既定方案和脚本，以9月26日（杭州亚运会开幕第3天）运行为内容，重点围绕抵离服务、亚运村运行、媒体服务、赛事保障、竞赛组织、颁奖等6个篇章展开，通过21个重要流程演练、27个突发应急事件处置进行合成演练。",
        time:"2023/08/30"
      },
      {
        id:1,
        _id:"e8d27cb364f044de007338d94bb7ad14",
        title:"亚运村食品安全保障团队入驻 保障赛时食品安全",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202308/W020230830712679918313.png",
        info:"近日，亚运村开展食品安全驻点监督动员大会，并迎来了食品安全保障团队的全员入驻。为了给运动员、技术官员、媒体记者提供安全、可靠、优质的餐饮服务，浙江省市场监管系统从全省11地市抽调108名精兵强将进驻亚运村，保障赛时食品安全监管工作顺利进行，让参赛代表共享美好“食”光。",
        time:"2023/08/30"
      },
      {
        id:2,
        _id:"413fd65864f045760071400b1417da77",
        title:"杭州亚运会湖州德清赛区举行“赛时一天”应急演练 记者现场感受精心、细心、暖心",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202308/W020230831480476372679.png",
        info:"8月29日至30日，杭州亚运会开启为期两天的综合演练。昨天，杭州亚运会湖州德清赛区迎来“赛时一天”应急演练。在德清县，各工作队伍按照“全要素、全流程、实战化”工作要求，围绕整体赛事组织和保障任务，精心设置突发事件场景，有序参与应急演练。",
        time:"2023/08/31"
      }
    ],
    Box002List:[
      {
        id:0,
        _id:"490d8cae64f052690004e3457562f066",
        title:"美网｜吴易昺晋级第二轮",
        url:"https://www.hangzhou2022.cn/xwzx/qqss/202308/W020230830492584531612.png",
        info:"8月29日，在2023美国网球公开赛男子单打第一轮比赛中，中国选手吴易昺以3比2战胜塞尔维亚选手拉约维奇，晋级第二轮。",
        time:"2023/08/30"
      },
      {
        id:1,
        _id:"e8d27cb364f052be00764c4448e1ca3c",
        title:"篮球世界杯｜多支球队成功晋级 东道主球队双双出局",
        url:"https://www.hangzhou2022.cn/xwzx/qqss/202308/W020230830491660888132.png",
        info:"在29日进行的2023年篮球世界杯小组赛第三轮比赛中，多米尼加、澳大利亚和意大利队锁定16强席位，东道主菲律宾队和日本队则双双落入17-32名的排位赛。",
        time:"2023/08/30"
      },
      {
        id:2,
        _id:"9ffab92d64f0530e0075dd1c580581f1",
        title:"美网｜首轮七位中国大陆选手全员晋级",
        url:"https://www.hangzhou2022.cn/xwzx/qqss/202308/W020230831499391479099.png",
        info:"2023美国网球公开赛首轮比赛于当地时间29日结束，七位中国大陆选手全员晋级。萨巴伦卡、穆雷、阿尔卡拉斯等名将均顺利过关。",
        time:"2023/08/31"
      }
    ],
    Box003List:[
      {
        id:0,
        _id:"9ffab92d64f0585b0076ad38237049ed",
        title:"杭州亚运会倒计时30天新闻发布会召开",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202308/W020230824570050195081.png",
        info:"杭州亚运会倒计时30天新闻发布会于2023年8月24日在主媒体中心新闻发布厅举行。杭州亚组委执行秘书长、杭州市副市长陈卫强，杭州亚组委竞赛部部长朱启南，杭州亚组委环境保障部部长、杭州市生态环境局局长马利阳分别就杭州亚运会整体筹备、竞赛、碳中和等工作的最新进展进行了介绍，同时回应媒体关切。",
        time:"2023/08/24"
      },
      {
        id:1,
        _id:"6cc20b0164f058990078226a2643e187",
        title:"杭州第19届亚运会第二次技术代表大会顺利召开 亚运会竞赛核心筹备工作基本就绪",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202307/W020230726379002159740.jpg",
        info:"杭州第19届亚运会召开第二次技术代表大会，并将举行集体项目抽签仪式，这标志着本届亚运会竞赛核心筹备工作基本就绪。",
        time:"2023/07/26"
      },
      {
        id:2,
        _id:"c26ac57064f058ed0008e6230f700c25",
        title:"杭州亚运会举行集体项目抽签仪式 足球排球手球藤球分组结果出炉",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202307/W020230727619613743812.png",
        info:"7月27日下午，杭州亚组委在杭组织召开杭州第19届亚运会集体项目抽签仪式，足球、排球、手球和藤球共4个项目完成了公开抽签。",
        time:"2023/07/27"
      }
    ],
    Box004List:[
      {
        id:0,
        _id:"8de6ebcc64f5adb9000dc4160023b02a",
        title:"杭州2022年第19届亚运会会徽解读",
        url:"https://www.hangzhou2022.cn/xwzx/jdxw/ttxw/202105/W020210709606713015043.jpg",
        info:"会徽是亚运会重要的视觉形象标志，是展示杭州亚运会理念和中国文化的重要载体。",
        time:"2018/08/06"
      },
      {
        id:1,
        _id:"233d137964f5ae4e000c2f072911a245",
        title:"杭州第19届亚运会火炬",
        url:"https://www.hangzhou2022.cn/yywh/yymx/202203/W020220409603991636940.png",
        info:"杭州2022年第19届亚运会火炬设计方案名为“薪火”，设计思想源自实证中华五千年文明史的良渚文化，以其庄重大气、意蕴深远的造型，通过火炬手们的手手相传，向世界展现中国设计的独特创意、中国制造的硬核力量。",
        time:"2022/04/01"
      },
      {
        id:2,
        _id:"8de6ebcc64f5aedd000dea793d288dbe",
        title:"杭州2022年第19届亚运会核心图形和色彩系统设计释义",
        url:"https://www.hangzhou2022.cn/images/hxtx_img_hxtx.jpg",
        info:"杭州亚运会核心图形和色彩系统是亚运视觉形象体系的基础性、辅助性元素，其设计融竞技体育精神、中国文化元素、杭州城市特质、国际化审美风格于一体，根植于杭州的历史人文、自然生态和创新基因，与会徽、吉祥物、主题口号、体育图标等视觉标志相互呼应，共同塑造了杭州亚运会的整体氛围和美学基调。",
        time:"2020/10/21"
      }
    ],
    Box005List:[
      {
        id:0,
        _id:"233d137964f5b4ab000d2b0b0f2ef882",
        title:"杭州：钱塘自古繁华，今日民康物阜",
        url:"https://www.hangzhou2022.cn/sqzc/hzsq/202204/W020220411014402961397.png",
        info:"作为中国跨境电子商务综合试验区和国家自主创新示范区，杭州着力打造集信息产业和智慧应用为一体的新经济形态，“天堂硅谷”声誉日隆，电子商务、信息软件、文化创意、休闲旅游等产业增势强劲。",
        time:"2022/04/11"
      },
      {
        id:1,
        _id:"7dc1d50264f5b553000feae856620156",
        title:"宁波：海定则波宁",
        url:"https://www.hangzhou2022.cn/sqzc/nbsq/202204/W020220424405155434480.png",
        info:"宁波地处中国华东地区、东南沿海，大陆海岸线中段，长江三角洲南翼，东有舟山群岛为天然屏障，属于典型的江南水乡兼海港城市，是中国大运河南端出海口、“海上丝绸之路”东方始发港。",
        time:"2022/04/11"
      },
      {
        id:2,
        _id:"8de6ebcc64f5b594000ef95d304555a9",
        title:"温州：东南山水甲天下",
        url:"https://www.hangzhou2022.cn/sqzc/wzsq/202204/W020220424405364649938.png",
        info:"温州地处中国华东地区、浙江东南部、瓯江下游南岸，东濒东海、南毗福建省、西及西北部与丽水相连、北和东北部与台州接壤，是长江三角洲中心区27城之一、中国数学家的摇篮、中国南戏的故乡、中国海鲜鸡蛋之乡、中国鞋都，温州人被国人称之为东方犹太人。",
        time:"2022/04/11"},
    ]
  },
  
  /*** 生命周期函数--监听页面加载 */
  onLoad: function () {
    console.log("首页首页")
    // 数据库
    db.collection("basicBox001").get({
      success: (res) => {
        // res.data
        that.setData({
          Box001List:res.data,
        })
      }
    }),
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
        this.setData({
          winHeight: res.windowHeight*2 - (res.windowWidth * 90 / 750) + 'rpx'
        })
      },
    })
    
  },
 
  toViewClick:function(e){
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
      toView: e.target.dataset.hash,
      nowstatus: e.target.dataset.hash,
    })
  },

  //跳转
  toInfo:function(e){
    var _id= e.currentTarget.dataset._id
    var dbcollection = e.currentTarget.dataset.collection
    wx.navigateTo({
      url: `/pages/basics/info/info?_id=${_id}&dbcollection=${dbcollection}`,
    })
  },
})