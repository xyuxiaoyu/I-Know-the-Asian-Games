// pages/activity/subpage001/subpage001.js
var db = wx.cloud.database()
Page({
  data: {
    index001: null,
    index002: null,
    index003: null,
    gender: ['男', '女'],
    region: ['-', '-', '-'],
    identity: [
      '居民身份证',
      '临时身份证',
      '护照',
      '港澳居民来往内地通行证',
      '中华人民共和国来往港澳通行证',
      '台湾居民来往大陆通行证',
      '大陆居民往来台湾通行证',
      '外国人居留证',
      '外国人出入境证',
    ],
    style:[
      '竞赛运行服务',
      '注册制证服务',
      '礼宾和语言服务',
      '抵离迎送服务',
      '仪式活动服务',
      '观众服务',
      '媒体运行服务',
      '后勤保障服务',
      '交通出行服务',
      '官方会议服务',
      '亚运村及官方接待饭店服务',
      '信息服务',
      '其他赛会保障需要的志愿服务',
    ],
    reginfo:{
      name:"",
      sex:"",
      id:"",
      idnum:"",
      phone:"",
      region:"",
      add:"",
      volunteer:""
    }
  },

  //输入框数据
  //姓名
  nameInput(e){
    this.setData({
      ['reginfo.name']:e.detail.value,
    })
    console.log(this.data.reginfo.name)
  },
  //证件号
  idInput(e){
    this.setData({
      ['reginfo.idnum']:e.detail.value,
    })
    console.log(this.data.reginfo.idnum)
  },
  //手机号
  phoneInput(e){
    this.setData({
      ['reginfo.phone']:e.detail.value,
    })
    console.log(this.data.reginfo.phone)
  },
  //地址
  addInput(e){
    this.setData({
      ['reginfo.add']:e.detail.value,
    })
    console.log(this.data.reginfo.add)
  },

  //选择picker
  //性别
  GenderChange(e) {
    this.setData({
      index001: e.detail.value,
      ['reginfo.sex']:this.data.gender[e.detail.value],
    })
    console.log(this.data.reginfo.sex)
  },
  //身份证类型
  IDChange(e) {
    this.setData({
      index002: e.detail.value,
      ['reginfo.id']:this.data.identity[e.detail.value],
    })
    console.log(this.data.reginfo.id)
  },
  //地区
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value,
      ['reginfo.region']:e.detail.value,
    })
    console.log(this.data.reginfo.region)
  },
  //志愿者类型
  StyleChange(e){
    this.setData({
      index003: e.detail.value,
      ['reginfo.volunteer']:this.data.style[e.detail.value],
    })
    console.log(this.data.reginfo.volunteer)
  },

  //报名
  gameVol:function(e){
    if(this.data.reginfo.name!="" && this.data.reginfo.sex!="" && this.data.reginfo.id!="" && this.data.reginfo.idnum!="" && this.data.reginfo.phone!="" && this.data.reginfo.region!="" && this.data.reginfo.add!="" && this.data.reginfo.volunteer!=""){
      db.collection("volunteerReg").add({
        data:{
          name:this.data.reginfo.name,
          sex:this.data.reginfo.sex,
          id:this.data.reginfo.id,
          idnum:this.data.reginfo.idnum,
          phone:this.data.reginfo.phone,
          region:this.data.reginfo.region,
          add:this.data.reginfo.add,
          volunteer:this.data.reginfo.volunteer,
          style:"赛会",
        },
        success:function(res){
          console.log(res)
          wx.showModal({
            //title: '报名表发送成功',
            content: '报名表发送成功',
            complete: (res) => {
              if (res.cancel) {
                console.log("取消")
              }
              if (res.confirm) {
                console.log("确认")
              }
            }
          })
        }
      })

    }else{
      wx.showModal({
        title: '无效报名表',
        content: '请将所有内容填写完整',
        complete: (res) => {
          if (res.confirm) {
            console.log("确认")
          }
        }
      })
    }
    
  }
  
})