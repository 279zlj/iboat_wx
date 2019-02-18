// pages/person/person.js
const app = getApp()

Page({
  data: {
    api: [
      { title: '购物车', tap: 'tapshop' },
      { title: '我的收藏', tap: 'tapkeep' },
      { title: '我的积分', tap: '' },
      { title: '收货地址', tap: 'tapaddr' },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  tapshop: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'shop/shop',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })

    }
    

  },
  tapfinish: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'all/all?currentTab=' + '3',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })

    }

  },
  tapall: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'all/all?currentTab=' + '0',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })

    }


  },
  tapwait: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'all/all?currentTab=' + '1',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })

    }
    

  },
  tapcar: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'all/all?currentTab=' + '2',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    
    }
  },
  tapaddr: function (event) {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: 'address/address',
      })
    }
    else {
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
   

  },
  tapkeep: function (event) {
    if (app.globalData.userInfo){
    wx.navigateTo({
      url: 'keep/keep',
    })
    }
    else{
      wx.showModal({
        title: '登陆提示',
        content: '尚未登陆',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '船主',
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
