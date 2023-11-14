// pages/activity/answer/info/info.js
var db = wx.cloud.database()
Page({
  data: {
    id:null,
    dbcollection:"",
    info:[],
  },
  onLoad(options) {
    console.log("问题答疑：",options);
    const{ id,dbcollection } = options;
    this._getList(id,dbcollection);
    this._search();

  },
  _getList(id,dbcollection){
    this.setData({
      id:parseInt(id),
      dbcollection:dbcollection,
    });
    console.log("传过来了!",this.data.id);
    
  },
  _search(){
    var that = this;
    db.collection(that.data.dbcollection).where({
      id:that.data.id,
    }).get({
      success: function(res){
        console.log("查找",res),
        that.setData({
          info:res.data,
        })
        console.log("赋值",that.data.info)
      }
    })
  }

})