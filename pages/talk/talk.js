// pages/talk/talk.js
var app = getApp()
import { DBpost} from '../../db/DBPost.js';
// var json = require('../../data/data.js')
Page({
  data: {
    currentTab: 0,
    postList:0
  },
  onTappost: function (event) {
    wx.switchTab({
      url: '../post/post',
    })

  },
  tapshop: function (event) {
    if (app.globalData.userInfo) {
    wx.navigateTo({
      url: '../person/shop/shop',
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
  gopay:function(e) {
    if (app.globalData.userInfo) {
    var pid=e.currentTarget.dataset.id;
    console.log(pid);
    wx.navigateTo({
      url: '../buy/buy?id=' + pid
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
  addshop:function(e){
    if (app.globalData.userInfo) {
    var cartItems = wx.getStorageSync("cartItems") || []
    var exist = cartItems.find(function (el) {
      return el.id == e.target.dataset.id
    })
    
    //如果购物车里面有该商品那么他的数量每次加一
    if (exist) {
      exist.value = parseInt(exist.value) + 1
    } else {
      cartItems.push({
        id:e.target.dataset.id,
        title: e.target.dataset.title,
        postimg: e.target.dataset.image,
        price: e.target.dataset.price,
        value: 1,
        selected: true
      })
      
    }

    wx.showToast({
      title: "加入购物车成功！",
      duration: 1000,
      icon: "success",
      mask: true
    })

    //更新缓存数据
    wx.setStorageSync("cartItems", cartItems)
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
  onUptap: function (event) {
    if (app.globalData.userInfo) {
    var newData = this.data.dbPost.dianzan();
    this.setData(
      {
        "post.upStatus": newData.upStatus
      }
    ),
    this.animationup.scale(2).step();
    this.setData({
      animationup:this.animationup.export()
    })
    setTimeout(function(){
      this.animationup.scale(1).step();
      this.setData({
        animationup:this.animationup.export()
      })
    }.bind(this),300

    )
      wx.showToast({
        title: newData.upStatus ? "收藏成功" : "取消收藏",
        duration: 1000,
        icon: "success",
        mask: true
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
  setAnimation:function(){
    var animationup=wx.createAnimation({
      timingFunction:'ease-in-out'
    })
    this.animationup=animationup
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var postId=options.id;
    var postList=wx.getStorageSync('postList');
    var post=postList[postId-1]
    var dbPost = new DBpost(postId);
    // var post= json.postList[postid-1];
    
    // var post=dbPost.getPostItemById().data;
    this.setData({
      post:post,
      dbPost:dbPost,
    })
    wx.setNavigationBarTitle({
      title: post.title,
    });
    this.setAnimation();
  },
 
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
onShareAppMessage: function () {
    return {
      title: this.postData.title,
      desc: this.postData.content,
      path: "/pages/talk/talk"
    }
  }
})
