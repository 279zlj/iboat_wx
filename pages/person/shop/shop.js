// pages/person/shop/shop.js
var dataObj=require('../../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    total: 0,
    CheckAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
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
    var cartItems = wx.getStorageSync("cartItems")
    this.setData({
      cartList: false,
      cartItems: cartItems
    })
    this.getsumTotal()
  },
  gopay: function (e) {
    var pid = e.currentTarget.dataset.id;
    // console.log(pid);
    wx.navigateTo({
      url: '../../buy/buy?id=' + pid
    })
  },
  //选择
  select: function (e) {
    var CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll
    var cartItems = this.data.cartItems

    for (var i = 0; i < cartItems.length; i++) {
      cartItems[i].selected = CheckAll
    }

    this.setData({
      cartItems: cartItems,
      CheckAll: CheckAll
    })
    this.getsumTotal()
  },
  add: function (e) {
    var cartItems = this.data.cartItems   //获取购物车列表
    var index = e.currentTarget.dataset.index //获取当前点击事件的下标索引
    var value = cartItems[index].value  //获取购物车里面的value值

    value++
    cartItems[index].value = value;
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()

    wx.setStorageSync("cartItems", cartItems)  //存缓存
  },

  //减
  reduce: function (e) {
    var cartItems = this.data.cartItems  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    var value = cartItems[index].value  //获取购物车里面的value值

    if (value == 1) {
      value--
      cartItems[index].value = 1
    } else {
      value--
      cartItems[index].value = value;
    }
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },

  // 选择
  selectedCart: function (e) {

    var cartItems = this.data.cartItems   //获取购物车列表
    var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
    var selected = cartItems[index].selected;    //获取购物车里面的value值

    //取反
    cartItems[index].selected = !selected;
    this.setData({
      cartItems: cartItems
    })
    this.getsumTotal();
    wx.setStorageSync("cartItems", cartItems)
  },




  //删除
  shanchu: function (e) {
    var cartItems = this.data.cartItems  //获取购物车列表
    var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
    cartItems.splice(index, 1)
    this.setData({
      cartItems: cartItems
    });
    if (cartItems.length) {
      this.setData({
        cartList: false
      });
    }
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },

  

  //合计
  getsumTotal: function () {
    var sum = 0
    for (var i = 0; i < this.data.cartItems.length; i++) {
      if (this.data.cartItems[i].selected) {
        sum += this.data.cartItems[i].value * this.data.cartItems[i].price
      }
    }
    //更新数据
    this.setData({
      total: sum
    })
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