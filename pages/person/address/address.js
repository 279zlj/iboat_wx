// pages/person/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // show:false,
    addItems: []
  },
  topadd: function (event) {
    wx.navigateTo({
      url: '../address/add-form/add-form',
    })

  },
  manager:function(addr){
    var name = addr.name;
    var tel = addr.tel;
    var door = addr.door;
    var addre = addr.addre;
    this.setData({
      show: true,
      name: name,
      tel: tel,
      door: door,
      addre:addre
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var addr=wx.getStorageSync('address')
    // if(addr=="")
    // {
    //   show:false
    // }
    // else{
      
    //   this.manager(addr);
    // }
    var addItems = wx.getStorageSync("addItems")
    this.setData({
      // addList: false,
      addItems: addItems
    })
    console.log(addItems);
    // wx.chooseAddress({
    //   success: function (res) {
    //     var name=res.userName;
    //     console.log(res.userName)
    //     console.log(res.postalCode)
    //     console.log(res.provinceName)
    //     console.log(res.cityName)
    //     console.log(res.countyName)
    //     var address=res.detailInfo;
    //     console.log(res.detailInfo)
    //     console.log(res.nationalCode)
    //     var tel=res.telNumber;
    //     console.log(res.telNumber)
        
    //   }
    
    // })
    // console.log(name, tel, door)
   
    wx.setNavigationBarTitle({
      title: '收货地址管理',
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