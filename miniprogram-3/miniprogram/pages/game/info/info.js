// pages/game/info/info.js
var db = wx.cloud.database()
const app = getApp()
Page({

  data: {
    openid:"",
    _id:'',
    info:[],
    want2see:[]
  },

  onLoad(options){
    console.log("体育运动：",options);
    const{ _id } = options;
    this._getList(_id);
    this._search();
    
  },
  _getList(_id){
    this.setData({
      _id:_id,
    });
    console.log("传过来了!",this.data._id);
  },
  _search(){
    db.collection("game").where({
      _id:this.data._id,
    }).get({
      success: (res)=>{
        console.log("全局变量：",app.globalData.openid)
        //var want2see = this.data.want2see
        //console.log(likelist)
        /*for(var i=0;i<likelist.length;i++){
          if(app.globalData.openid == likelist[i]){
            temp[0].see = true
          }
        }*/
        console.log("查找",res),
        this.setData({
          info:res.data,
        })
        console.log("赋值",this.data.info)
      }
    })
    if(app.globalData.openid != ""){
      db.collection("userinfo").where({
        _openid:app.globalData.openid
      }).get({
        success:(res)=>{
          
          this.setData({
            want2see:res.data[0].want2see
          })
          console.log(this.data.want2see)
          for(var i=0; i<this.data.want2see.length;i++){
            if(this.data._id == this.data.want2see[i]){
              this.setData({
                ["info[0].see"] : true,
              })
              
            }
          }
        }
      })
    }else{
      this.setData({
        want2see:[]
      })
    }
  },


  praiseThis:function(e){
    if(app.globalData.openid == ""){
      wx.showModal({
        title: '未登录不可点赞',
        content: '请先授权登录！',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }else{
      let iflike = e.currentTarget.dataset.iflike
      var _id = this.data._id
      this.setData({
        ["info[0].see"]:iflike,
      })
      console.log(this.data.info[0].see)
      if(iflike){
        var want2see = this.data.want2see
        want2see.push(_id)
        console.log(want2see)
        console.log(this.data._id)
        //userinfo
        db.collection("userinfo").where({
          _openid:app.globalData.openid
        }).update({
          data:{
            want2see:want2see,
          },
          success:(res)=>{
            console.log(res)
          }
        })
        
      }else{
        var want2see = this.data.want2see
        for(var i=0;i<want2see.length;i++){
          if(want2see[i] == _id){
            want2see.splice(i,1);
          }
        }
        //userinfo
        db.collection("userinfo").where({
          _openid:app.globalData.openid
        }).update({
          data:{
            want2see:want2see,
          },
          success:(res)=>{
            console.log(res)
          }
        })
        /*db.collection("game").where({
          _id:this.data._id
        }).update({
          data:{
            wholike:wholike,
          },
          success:(res)=>{
            console.log(res)
          }
        })*/
      }
      
    }
    
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