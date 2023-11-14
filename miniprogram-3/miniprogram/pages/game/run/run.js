// pages/game/run/run.js
var db = wx.cloud.database()
Page({

  data: {
    kind:"",
    gameList: [
    ],
  },

  onLoad(options){
    console.log("体育运动：",options);
    const{ kind } = options;
    this._getList(kind);
    this._search();
  },
  _getList(kind){
    this.setData({
      kind:kind,
    });
    console.log("传过来了!",this.data.kind);
  },
  _search(){
    var that=this;
    // 获取数据库 basicBox001表
    db.collection("game").where({
      kind:this.data.kind
    }).get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          gameList:res.data,

        })
        console.log("gameList:",that.data.gameList)
      }
    })
  },
  toinfo:function(e){
    var _id = e.currentTarget.dataset._id
    wx.navigateTo({
      url: `/pages/game/info/info?_id=${_id}`,
    })
  }
})