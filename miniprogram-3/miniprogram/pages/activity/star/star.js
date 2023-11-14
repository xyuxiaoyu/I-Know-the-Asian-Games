// pages/activity/star/star.js
var db = wx.cloud.database()
Page({
  data: {
    scroll: "0",
    winHeight:'100%',
    toView:'d0',
    nowstatus:'d0',
    list:[
     
    ],
  },
  scrollStepsgo(e) {
    if(this.data.scroll==0){
      this.setData({
        scroll:1,
      })
    }else{
      this.setData({
        scroll: this.data.scroll == 14 ? 0 : this.data.scroll + 1,
      })
    }
    this.setData({
      toView: "d"+ this.data.scroll,
      nowstatus: "d"+ this.data.scroll,
    })
    console.log(this.data.toView)
  },
  scrollStepsback(e) {
    if(this.data.scroll!=0){
      this.setData({
        scroll:this.data.scroll - 1,
      })
    }else{
      this.setData({
        scroll: this.data.scroll == 0 ? 14 : this.data.scroll - 1,
      })
    }
    this.setData({
      toView: "d"+ this.data.scroll,
      nowstatus: "d"+ this.data.scroll,
    })
    console.log(this.data.toView)
  },
  /*** 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        that.setData({
          winHeight: res.windowHeight*2 - (res.windowWidth * 90 / 750) + 'rpx'
        })
      },
    }),
    // 获取数据库 basicBox001表
    db.collection("star").get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          list:res.data,
        })
        console.log("starList:",that.data.list)
      }
    })
  },
})