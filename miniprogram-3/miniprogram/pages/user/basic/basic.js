// pages/user/basic/basic.js
var db = wx.cloud.database()
const app = getApp()
Page({
  data: {
    isindb:false,
    currinfo:[],
    openid:"",
    name:"",
    info: [{
      title:"性别",
      info: "无",
    },{
      title:"出生日期",
      info: "无",
    },{
      title:"所在地址",
      info: "无",
    },{
      title:"联系方式",
      info: "无",
    },{
      title:"职业",
      info: "无",
    }],
  },
  onLoad(options){
    console.log("个人信息：",options);
    const{ openid,name } = options;
    this._getList(openid,name);
    //检测是否有自己
    db.collection('userinfo').where({
      _openid:app.globalData.openid
    }).get({
      success:(res)=>{
        console.log(res.data)
        //如果没有
        if(res.data.length==0){
          db.collection('userinfo').add({
            data:{
              sex:"",
              birth:"",
              phone:"",
              city:[],
              vocation:"",
              mylike:[],
              want2see:[]
            }
          })
        }
      }
      
    })
    
  },
  _getList(openid,name){
    this.setData({
      openid:openid,
      name:name,
    });
    console.log("传过来了!",this.data.openid,this.data.name);
    if(this.data.openid!=""){
      this._search();
    }
    
  },
  _search(){
    db.collection('userinfo').where({
      _openid:this.data.openid,
    }).get({
      success: (res)=>{
        console.log("找到了",res)
        if(res.data.length==1){
          this.setData({
            'info[0].info':res.data[0].sex,
            'info[1].info':res.data[0].birth,
            'info[2].info':res.data[0].city,
            'info[3].info':res.data[0].phone,
            'info[4].info':res.data[0].vocation,
            isindb:true,
          })
        }
        
      }
    })
  },
  changeInfo:function(){
    if(this.data.openid==""){
      wx.showModal({
        title: '未登录！',
        content: '请先授权登录',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }else{
      wx.navigateTo({
        url: `/pages/user/box001/box001?openid=${this.data.openid}&isindb=${this.data.isindb}`,
      })
    }
    
  }
})