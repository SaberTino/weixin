Page({
    data: {
        category: [
            {name:'数码',id:'a'},
            {name:'服装',id:'b'},
            {name:'香水',id:'c'},
            {name:'户外',id:'d'},
            {name:'茶叶',id:'e'},
            {name:'零食',id:'f'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        wx.request({
            url:"http://127.0.0.1/weixin/xiaoxiao/cate-detail.txt",
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
        
    },
    switchTab(e){
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
    
})