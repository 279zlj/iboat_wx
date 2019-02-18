class DBpost{
  constructor(postId){
    this.storageKeyName ="postList";
    this.postId=postId;
  }
  //得到全部文章信息
  getAllPostData(){
    var res=wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require('../data/data.js');
      this.execSetStorageSync(res);
    }
    return res;
  }
  searchData(keyone){
    var list = this.getAllPostData();
    var result;
    var i;
    for (var j = 0; j < list.length; j++) {
      if(keyone==list[j].title){
        return i=list[j].postId
        break;
      }
      else console.log('no')
    }
  }
  //保存或者更新缓存数据
  execSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName, data)
  }
  //获取指定id
  getPostItemById(){
    var postList=this.getAllPostData();
    return{
      index:this.postId-1,
      data:postList[this.postId-1]
    }
  }
  dianzan() {
    return this.updatePostData("dianzan")
  }
  updatePostData(category){
    var postData=this.getPostItemById().data;
    var allPostData=this.getAllPostData();
    switch(category){
      case "dianzan":
      if(!postData.upStatus){
        postData.upStatus=true;
      }
      else{
        postData.upStatus=false;
      }
      break;
      default:
      break;
    }
    allPostData[this.getPostItemById().index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
    
  }
};
export{DBpost}