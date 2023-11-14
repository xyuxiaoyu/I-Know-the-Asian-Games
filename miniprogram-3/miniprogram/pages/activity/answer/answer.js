// pages/activity/answer/answer.js
var db = wx.cloud.database()
Page({
  data: {
    searchInput:"",
    isAll:true,
    searchlist:[],
    BoxList:[
     
    ],
  },
  onLoad(){
    var that=this;
    // 获取数据库 basicBox001表
    db.collection("answer").get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          BoxList:res.data,
          searchlist:res.data,
        })
        console.log("BoxList:",that.data.BoxList)
      }
    })
    
    /*if(that.data.searchInput == ""){
      that.setData({
        searchlist:that.data.BoxList,
      })
    }*/
  },
  //搜索 
  inputText:function(e){
    this.setData({
      searchInput: e.detail.value
    })
    if(this.data.searchInput == ""){
      this.setData({
        searchlist:this.data.BoxList,
      })
    }
    console.log("输入框：",this.data.searchInput)
  },
  searchBut:function(){
    //循环取数据
    if(this.data.searchlist.length != 0){
      this.setData({
        searchlist:[],
      })
    }
    for(var i=0;i<this.data.BoxList.length;i++){
      var string = this.data.BoxList[i].title;
      //查询title是否包含搜索的关键词，如果有就把他装进searchlist数组
      if(string.indexOf(this.data.searchInput) >= 0){
        console.log("检测：",this.data.searchInput)
        var temp=this.data.searchlist
        temp.push(this.data.BoxList[i]);
        this.setData({
          searchlist:temp,
        })
      }
    }
    console.log("检测后：",this.data.searchlist)
  },
  //跳转
  toInfo:function(e){
    var id= e.currentTarget.dataset.id
    var dbcollection = "answer"
    console.log("传递数据：",id)
    wx.navigateTo({
      url: `/pages/activity/answer/info/info?id=${id}&dbcollection=${dbcollection}`
    })
    console.log(id)
  }
})