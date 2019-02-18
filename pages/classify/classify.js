// pages/classify/classify.js
var app = getApp()
import { DBpost } from '../../db/DBPost.js'
var dataClass=require('../../data/classify.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerShow:true,
    searchPanelShow:false,
    searchShow:false,
    searchResult:{},
  },
  onBindFocus:function(event){
    this.setData({
      containerShow:false,
      searchShow: true
    })
  },
  onBindConfirm: function (event) {
    
    var keyone = event.detail.value;
    var dbPost = new DBpost();
    var list = dbPost.getAllPostData();
    var i=null;
    for (var j = 0; j < list.length; j++) {
      if (keyone == list[j].title) {
        
        i=list[j].postId;
        wx.setStorageSync('searchid', i);
        app.globalData.searchid=wx.getStorageSync('searchid')
        // console.log(app.globalData.searchid)
        this.setData({
          searchPanelShow: true,
          id: getApp().globalData.searchid
        })
        break;
      }
    } 
    if (!i) {
      wx.showToast({
        title: '搜不到相关船只哦。\n可能客官的关键字不全，\n可到官网搜查',
        duration: 3000,
        image: "/images/warn.png",
        mask: true
      })
    }
  
    
  },
  onCanceImgTap:function(event){
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchShow: false,
      searchResult:{},
      inputValue:''
    })
    
  },
  onTapDetail: function (event) {
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../talk/talk?id=' + postId,
    })

  },
  tapmore: function (event) {
    
    wx.navigateTo({
      url: 'more-tpl/more-tpl?title='+"查看更多"
    })

  },
  tapclass: function (event) {
      
    var title = event.currentTarget.dataset.id;
    var name = dataClass.classify[title-1].name;
    wx.navigateTo({
      url: 'more-tpl/more-tpl?title=' + name
    })
   
  },
  onDetail: function (event) {
    var dbPost = new DBpost();
    var list = dbPost.getAllPostData();
     
    var id=getApp().globalData.searchid;

    wx.navigateTo({
      url: '../talk/talk?id=' + id,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbpost = new DBpost();
    this.setData({
      postList: dbpost.getAllPostData(),
      classify:dataClass.classify.slice(0,3),
      classify_two: dataClass.classify.slice(3, 6)
    });
    console.log(dbpost.getAllPostData())
    // this.setData({
    //   postList: dataObj.postList
    // })
    
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
