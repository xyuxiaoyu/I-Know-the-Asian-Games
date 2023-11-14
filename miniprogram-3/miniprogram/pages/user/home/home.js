// pages/user/home/home.js
var db = wx.cloud.database()
const app = getApp()
Page({
  data:{
    nologin:"/images/avr.png",
    openid:'',
    name:'',
    myavatar:'',
    islogin:false,
    info001:[
      {
        id:0,
        title:"基本信息",
        name:"basic",
        page:"basic",
      },
      {
        id:1,
        title:"我的报名表",
        name:"form",
        page:"form",
      },
      {
        id:2,
        title:"我的发布",
        name:"myshare",
        page:"myshare",
      }
    ]
  },

  //授权登录
  login:function(){
    console.log("授权登录")
    wx.getUserProfile({
      desc: '使用微信号授权',
      success:(res)=>{
        console.log("授权成功",res)
        //获取openid
        wx.cloud.callFunction({
          name:'getOpenid',
          complete:(re)=>{
            app.globalData.openid = re.result.openid,
            this.setData({
              openid:re.result.openid,
            })
            console.log("全局变量：",app.globalData.openid)
          }
        })
        //赋值
        this.setData({
          name:res.userInfo.nickName,
          myavatar:res.userInfo.avatarUrl,
          islogin:true,
        })
        console.log(this.data.myavatar)
      },
      fail:(res)=>{
        console.log("授权失败",res)
      }
    })
  },
  exit:function(){
    var app = getApp()
    app.globalData.openid = "",
    this.setData({
      name:"",
      myavatar:"",
      openid:"",
      islogin:false
    })
  },
  
 
})