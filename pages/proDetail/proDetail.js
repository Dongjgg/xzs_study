import {productDetail} from "../../api/apis"
let id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    id=options.id;
    this.getDetail();
  },

  
  //获取详情页数据  
  getDetail(){
    productDetail({
      id
    }).then(res=>{
      console.log(res);
      wx.setNavigationBarTitle({
        title:res.data.title
      })
      this.setData({
        detail:res.data
      })
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(e) {    
    return {
      title:this.data.detail.title,
      path:"/pages/productDetail/productDetail?id="+this.data.detail._id
    }
  },

  // 分享到朋友圈
  onShareTimeline(){
    return {
      title:this.data.detail.title,
      path:"/pages/newsDetail/newsDetail?id="+this.data.detail._id
    }
  }
  
})