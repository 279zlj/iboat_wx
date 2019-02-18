// pages/person/address/add-form/add-form.js
// var dataObj=require('../../../../data/city.js');
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    animationData:{},
    array: ['广东省广州市', '广东省清远市', '广东省茂名市', '广东省云浮市', '广东省江门市', '广东省韶关市','广东省汕头市'],
    index:0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // bindChange: function (e) {
  //   const val = e.detail.value
  //   wx.setStorageSync('eareid', val)
  //   console.log(val)
  //   app.globalData.eareid = wx.getStorageSync('eareid')
  //   // console.log(app.globalData.searchid)
  //   this.setData({
  //     id: getApp().globalData.eareid
  //   })
  // },
  showadd:function(event){
    var that=this;
    var animation=wx.createAnimation({
      duration:1000,
      timingFunction:"linear"
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export(),
      show: false,
      chooseSize: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  
  click_blank:function(event){
    this.setData({
      show:true
    })
  },
  formSubmit: function (e) {
    var warn = "";
    var that = this;
    var flag = false;
    if (e.detail.value.name == "") {
      warn = "请填写您的姓名！";
    } else if (e.detail.value.tel == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.addre == "") {
      warn = "请选择您的所在区域";
    } else if (e.detail.value.door == "") {
      warn = "请输入您的具体地址";
    } else if (e.detail.value.code == '0') {
      warn = "请输入您的邮政编码";
    } else {
      flag = true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      var addItems = wx.getStorageSync("addItems") || []
      var exist = addItems.find(function (el) {
        return el.name == e.target.dataset.name
      })
      if (exist) {
        exist.value = parseInt(exist.value) + 1
      } else {
        addItems.push({
          name: e.detail.value.name,
          tel: e.detail.value.tel,
          door: e.detail.value.door,
          addre: e.detail.value.addre,
          value: 1,
          selected: true
        })
        
      }
      wx.redirectTo({
        url: '../address?tel=' + e.detail.value.tel + "&addre=" + e.detail.value.addre + "&door=" + e.detail.value.door + "&name=" + e.detail.value.name + "&code=" + e.detail.value.code+ "&flag=" + flag + "&areavalue=" + e.detail.value.area
        //？后面跟的是需要传递到下一个页面的参数  

      });
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
    wx.setStorageSync("addItems", addItems)
  } ,
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '选择地址',
    })
    // this.setData({
    //   city:dataObj.city
    // })
  },
  bindDateChange: function (e) {
    console.log('picker发生change事件,携带value值为：', e.detail.value)
    this.setData({
      date: e.detail.value
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