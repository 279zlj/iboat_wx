// pages/classify/more-tpl/more-tpl.js
import { DBpost } from '../../../db/DBPost.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onTapDetail: function (event) {
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../../talk/talk?id=' + postId,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    wx.showNavigationBarLoading();
    var dbpost = new DBpost();
    this.setData({
      postList: dbpost.getAllPostData()
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})