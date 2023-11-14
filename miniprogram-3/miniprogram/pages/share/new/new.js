// pages/share/new/new.js
var db = wx.cloud.database()
Page({
  data: {
    listlen:null,
    imgList: [],
    title: "",
    num:0,
  },
  onLoad(){
    db.collection("share").count({
      success: (res)=> {
        this.setData({
          listlen:res.total
        })
        console.log(this.data.listlen)
      },
    })
  },
  
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      content: '确定要删除吗？',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput:function(e) {
    this.setData({
      title: e.detail.value
    })
    console.log(this.data.title);
  },
  /**发布动态 */
  shareOK:function(){
    console.log('imgList', this.data.imgList)
    let filePathImg = this.data.imgList[0];
    let title = this.data.title;  
    //let num = this.data.num;
    if (title && filePathImg) { 
      db.collection("share").add({
        data:{
          id:this.data.listlen,
          love:false,
          num:0,
          title:title,
          url:filePathImg,
          wholike:[],
        },
        success:(res)=>{
          wx.navigateBack()({
            url: '/pages/share/home/home',
          });
          console.log("返回share/home")
        }
      })
      
		}else{
      wx.showModal({
        //title: '无效发布',
        content: '请将文本和图片上传完整',
        complete: (res) => {
          if (res.cancel) {}
      
          if (res.confirm) {}
        }
      })
    }
  }
})