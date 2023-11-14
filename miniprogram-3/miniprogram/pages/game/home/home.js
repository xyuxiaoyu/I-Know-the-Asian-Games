// pages/game/home/home.js
Page({
  data: {
    gameList: [{
      icon: 'cardboardfill',
      color: 'red',
      name: '竞技性',
      kind: 'run',
    }, {
      icon: 'recordfill',
      color: 'orange',
      name: '球类',
      kind: 'ball',
    }, {
      icon: 'picfill',
      color: 'yellow',
      name: '对抗性',
      kind: 'fight',
    }, {
      icon: 'noticefill',
      color: 'olive',
      name: '水上',
      kind: 'water',
    }],
    gridCol:3,
    Box001List:[
      {
        id:0,
        _id:"233d137964fa965c00d7855f4f186165",
        title:"黄龙体育中心游跳馆",
        url:"https://www.hangzhou2022.cn/sssg/sscg/202203/W020220330531729784603.jpg",
        info:"黄龙体育中心游跳馆为亚运会水球项目比赛场馆，位于杭州市西湖区，风景秀丽的西子湖畔，处于整个黄龙体育中心的北部，在亚运村的西北方向且相距约11.5公里。",
        time:"2022/04/01"
      },
      { 
        id:3,
        _id:"def1da4564fa973600db39ff6c4093ea",
        title:"杭州奥体中心体育馆",
        url:"https://www.hangzhou2022.cn/sssg/sscg/202203/W020220330545371547318.jpg",
        info:"杭州奥体中心位于杭州市萧山区，杭州城市新中心，距离亚运村约3公里。场馆用地22.79公顷，总建筑面积39.695万平方米。",
        time:"2022/04/01"
      },
      {
        id:5,
        _id:"7dc1d50264fa988800db67ee66881f86",
        title:"浙江工业大学（屏峰校区）板球场",
        url:"https://www.hangzhou2022.cn/sssg/sscg/202203/W020220330565461355589.jpg",
        info:"浙江工业大学（屏峰校区）板球场地为亚运会板球项目比赛场地，位于杭州西湖区、浙江工业大学屏峰校区内，西临图书馆，南侧为健行教学楼用房，北侧为上埠河，东侧为学校田径场，与校外城市主干道留和路相距约500米。",
        time:"2022/04/01"
      },
    ],
    Box002List:[
      {
        id:6,
        _id:"41d77edc64fd5a570115906d471c4b06",
        title:"杭州亚运会总赛程更新 3.0版（按场馆）",
        url:"https://www.hangzhou2022.cn/yywh/yymx/202204/W020220409602157520301.png",
        info:"根据最新报名调整情况，经杭州亚运会各项目技术代表确认，杭州亚运会总赛程更新至3.0版，现予以发布。",
        time:"2023/09/08"
      },
      {
        id:7,
        _id:"def1da4564fd5b5a011ba6e974b4b748",
        title:"杭州亚运会总赛程更新 3.0版（按项目）",
        url:"https://www.hangzhou2022.cn/yywh/yymx/202204/W020220409602157520301.png",
        info:"根据最新报名调整情况，经杭州亚运会各项目技术代表确认，杭州亚运会总赛程更新至3.0版，现予以发布。",
        time:"2023/09/08"
      },
    ],
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