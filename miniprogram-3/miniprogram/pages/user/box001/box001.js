// pages/user/box001/box001.js
var db = wx.cloud.database()
Page({
  data: {
    openid:"",
    isindb:false,
    index001: null,
    index002: null,
    gender: ['保密','男', '女'],
    date: '保密',
    region: ['-', '-', '-'],
    vocation: [
      '保密',
      '国家机关、党群组织、企业、事业单位负责人',
      '专业技术人员',
      '办事人员和有关人员',
      '社会生产服务和生活服务人员',
      '农、林、牧、渔业生产及辅助人员',
      '生产、运输设备操作人员及有关人员',
      '军人',
      '不便分类的其他从业人员',
      '学生',
    ],
    userinfo:{
      sex:"",
      birth:"",
      phone:"",
      city:"",
      vocation:""
    }
  },
  onLoad(options){
    console.log("修改信息",options);
    const{ openid,isindb } = options;
    this._getList(openid,isindb);
  },
  _getList(openid,isindb){
    this.setData({
      openid:openid,
      isindb:isindb,
    });
    console.log("传过来了!",this.data.openid,this.data.isindb);
  },

  //性别
  GenderChange(e) {
    this.setData({
      index001: e.detail.value,
      ['userinfo.sex']:this.data.gender[e.detail.value],
    })
    console.log(this.data.userinfo.sex);
  },
  //生日
  DateChange(e) {
    this.setData({
      ['userinfo.birth']:e.detail.value,
      date: e.detail.value,
    })
    console.log(this.data.userinfo.birth);
  },
  //城市
  RegionChange: function(e) {
    this.setData({
      ['userinfo.city']:e.detail.value,
      region: e.detail.value
    })
    console.log(this.data.userinfo.city);
  },
  //职业
  VocationChange(e) {
    this.setData({
      index002: e.detail.value,
      ['userinfo.vocation']:this.data.vocation[e.detail.value],
    })
    console.log(this.data.userinfo.vocation);
  },
  //电话号
  phoneInput:function(e){
    this.setData({
      ['userinfo.phone']: e.detail.value
    })
    console.log(this.data.userinfo.phone);
  },

  //保存
  saveInfo:function(){
    console.log(this.data.userinfo)
    //如果信息不完整
    if(this.data.userinfo.sex=="" || this.data.userinfo.birth=="" || this.data.userinfo.city=="" || this.data.userinfo.phone=="" || this.data.userinfo.vocation==""){
      wx.showModal({
        //title: '',
        content: '请将信息填写完整',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }
    //信息完整
    else{
      if(this.data.isindb){
        db.collection("userinfo").where({
          _openid:this.data.openid,
        }).update({
          data:{
            sex:this.data.userinfo.sex,
            birth:this.data.userinfo.birth,
            phone:this.data.userinfo.phone,
            city:this.data.userinfo.city,
            vocation:this.data.userinfo.vocation,
          },
          success:(res)=>{
            console.log(res)
            wx.showModal({
              content: '修改成功',
              complete: (res) => {
                if (res.cancel) {}
            
                if (res.confirm) {}
              }
            })
          }
        })
      }
      

      //返回上一页面时传递数据
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];
      console.log("prevPage:",prevPage.options);
      prevPage.setData({
        'info[0].info':this.data.gender[this.data.index001],
        'info[1].info':this.data.date,
        'info[2].info':this.data.region,
        'info[3].info':this.data.phone,
        'info[4].info':this.data.vocation[this.data.index002],
      })
      wx.navigateBack({
        delta: 1,
      })

    }
    
  }
})