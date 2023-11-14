// pages/user/form/form.js
var db = wx.cloud.database()
Page({
  data: {
    openid:"",
    name:"",
    list:[],
    modal:{
      
    }
  },

  onLoad(options) {
    console.log("我的报名表：",options);
    const{ openid,name } = options;
    this._getList(openid,name);
  },
  _getList(openid,name){
    this.setData({
      openid:openid,
      name:name,
    });
    console.log("传过来了!",this.data.openid,this.data.name);
    if(this.data.openid!=""){
      this._search();
    }else{
      wx.showModal({
        title:'未登录！',
        content: '请先授权登录',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }
    
  },
  _search(){
    db.collection('volunteerReg').where({
      _openid:this.data.openid,
    }).get({
      success: (res)=>{
        console.log("找到了",res)
        if(res.data.length>=1){
          this.setData({
            list:res.data,
          })
          console.log("list:",this.data.list)
        }
        
      }
    })
  },
  showModal(e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      modalName: e.currentTarget.dataset.target,
      modal:this.data.list[index]
    })
    console.log(this.data.modal)
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

})