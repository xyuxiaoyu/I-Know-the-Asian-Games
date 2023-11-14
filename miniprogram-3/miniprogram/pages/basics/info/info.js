// pages/basics/info/info.js
var db = wx.cloud.database()
Page({
  data: {
    _id:null,
    dbcollection:"",
    info:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("首页详情：",options);
    const{ _id,dbcollection } = options;
    this._getList(_id,dbcollection);
    this._search();

  },
  _getList(_id,dbcollection){
    this.setData({
      _id:_id,
      //id:parseInt(id),
      dbcollection:dbcollection,
    });
    console.log("传过来了!",this.data._id);
    
  },
  _search(){
    var that = this;
    db.collection(that.data.dbcollection).where({
      _id:that.data._id,
    }).get({
      success: function(res){
        console.log("查找",res),
        that.setData({
          info:res.data,
        })
        console.log("赋值",that.data.info)
      }
    })
  },

  clickImg:function (e) {
    var imgurl = e.currentTarget.dataset.img;
    wx.previewImage({
      urls: [imgurl],
      current:'',
      success:(res)=>{},
      fail:(res)=>{}
    })
  }
})