// pages/activity/home/home.js
Page({
  options: {
    addGlobalClass: true,
  },
  /*** 页面的初始数据 */
  data: {
    /**轮播图 图片数组 */
    cardCur: 0,
    swiperList:[
      {id:0,
        url:"https://tse2-mm.cn.bing.net/th/id/OIP-C.bkaAQoUzs0PjKHsMcvBzKQHaE8?pid=ImgDet&rs=1"
      },
      {id:1,
        url:"https://hznews.hangzhou.com.cn/chengshi/content/2022-03/11/3db260c9-5d73-462f-9ab8-d5d56a3c9714.jpg"
      },
      {id:2,
        url:"https://www.hangzhou.gov.cn/picture/-1/201203163713778052.jpg"
      },
      {id:3,
        url:"https://hznews.hangzhou.com.cn/chengshi/content/2021-03/05/89b26ed3-0cbb-4bc6-8c57-8e0606cc0450.jpg"
      },
    ],

    elements: [
      {
        title: '亚运之星',
        page: 'star',
        name: 'Star',
        color: 'yy3',
        icon: 'favor'
      },
      {
        title: '历届亚运',
        page: 'history',
        name: 'history',
        color: 'yy4',
        icon: 'news'
      },
      {
        title: '新闻动态',
        page: 'news',
        name: 'news',
        color: 'yy5',
        icon: 'new'
      },
      {
        title: '问题答疑',
        page: 'answer',
        name: 'Answer',
        color: 'yy6',
        icon: 'service'
      },
    ],
  },
  onLoad(options) {
    //this.towerSwiper('swiperList');
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
})