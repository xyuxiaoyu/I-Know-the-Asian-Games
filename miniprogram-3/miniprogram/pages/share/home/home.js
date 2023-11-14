// pages/share/home/home.js
var db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    openid:"",
    list: [
    ],
    mylike:[]
  },
  onShow: function() {
    if(app.globalData.openid != ""){
      db.collection("userinfo").where({
        _openid:app.globalData.openid
      }).get({
        success:(res)=>{
          
          this.setData({
            mylike:res.data[0].mylike
          })
          console.log(this.data.mylike)
        }
      })
    }else{
      this.setData({
        mylike:[]
      })
    }
    
    db.collection("share").get({
      success:(res)=>{
        var temp = res.data;
        console.log("全局变量：",app.globalData.openid)
        for(var i=0;i<temp.length;i++){
          //var likelist = temp[i].wholike
          var likelist = this.data.mylike
          for(var j=0;j<likelist.length;j++){
            if(temp[i]._id == likelist[j]){
              temp[i].love = true
            }
          }
        }
        this.setData({
          list:temp
        })
        console.log("最后：",this.data.list)
      }
    })
    
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
      var _id = e.currentTarget.dataset._id
      var id = e.currentTarget.dataset.id
      console.log(iflike,_id,id)
      this.setData({
        ["list["+id+"].love"]:iflike,
      })
      if(iflike){
        var mylike = this.data.mylike
        mylike.push(_id)
        console.log(mylike)
        this.setData({
          ["list["+id+"].num"]:this.data.list[id].num + 1,
        })
        //userinfo
        db.collection("userinfo").where({
          _openid:app.globalData.openid
        }).update({
          data:{
            mylike:mylike,
          },
          success:(res)=>{
            console.log(res)
          }
        })
        //share
        db.collection("share").where({
          _id:_id
        }).update({
          data:{
            num:this.data.list[id].num,
          },
          success:(res)=>{
            console.log(res)
          }
        })
      }else{
        var mylike = this.data.mylike
        //var wholike = this.data.list[id].wholike
        for(var i=0;i<mylike.length;i++){
          if(mylike[i] == _id){
            mylike.splice(i,1);
          }
        }
        this.setData({
          ["list["+id+"].num"]:this.data.list[id].num - 1,
        })
        //userinfo
        db.collection("userinfo").where({
          _openid:app.globalData.openid
        }).update({
          data:{
            mylike:mylike,
          },
          success:(res)=>{
            console.log(res)
          }
        })
        //share
        db.collection("share").where({
          _id:_id
        }).update({
          data:{
            num:this.data.list[id].num,
          },
          success:(res)=>{
            console.log(res)
          }
        })
      }
      
    }
    
  },

  shareNew:function(){
    if(app.globalData.openid == ""){
      wx.showModal({
        title: '未登录不可发布',
        content: '请先授权登录！',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }else{
      wx.navigateTo({
        url: '/pages/share/new/new',
      })
    }
    
  },
 
})