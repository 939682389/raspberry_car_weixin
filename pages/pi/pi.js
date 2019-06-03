// pages/pi/pi.js
var app =getApp()
let socketOpen = false
// socket 连接插件
const io = require('../../utils/weapp.socket.io.js')
// socket 连接地址
var socketUrl = 'ws://192.168.43.6:5000'
// socket 状态更新
var socketMessage = ''
// 上下文对象
var that
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    longTime:'',
    index:0,
    TabCur: 0,
    lroa:80,
    hroa: 20,
    swiperList: [{
      type: 'image',
      url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1559116508&di=6182e5118d8950fdc151b7d9d0de52f0&src=http://hbimg.b0.upaiyun.com/54ebececeda0217648263cc944d6cfd413a17cdf2cc6-MGHS0y_fw658'
    }],
    T:"获取温湿度",
  },
  left(){
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id:'t_left'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------left------')
      }
    })

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  longleft() {
    var that=this
    var longTime = setInterval(() => {
      that.setData({
        longTime: longTime
      })
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 'l_left'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------left------')
      }
      })
    }, 500)

  },
  right() {
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 't_right'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------right------')
      }
    })

  },
  longright() {
    var that = this
    var longTime = setInterval(() => {
      that.setData({
        longTime: longTime
      })
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 'l_right'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------right------')
      }
      })
    }, 500)

  }, yuntai(){
    console.log('------EEE------')
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 'yuntai'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  forward(){
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 't_up'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------up------')
      }
    })

  },
  longforward() {
    var that = this
    var longTime = setInterval(() => {
      that.setData({
        longTime: longTime
      })
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 'l_up'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------up------')
      }
      })
    }, 500)

  },
  back() {
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 't_down'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------down------')
      }
    })
  },
  longback() {
    var that = this
    var longTime = setInterval(() => {
      that.setData({
        longTime: longTime
      })
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 'l_down'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------down------')
      }
      })
    }, 500)
    },
  //减少
  reducelongTap: function (e) {
    var index = e.currentTarget.dataset.index,
      _this = this.data;
    var longTime = setInterval(() => {
      if (parseInt(_this.para_list[index].num) == 0) {
        clearInterval(longTime)
        return;
      }
      parseInt(_this.para_list[index].num)
      _this.para_list[index].num--
      this.setData({
        para_list: _this.para_list
      })
    }, 500)
  },
  //增加
  addlongTap: function (e) {
    var that=this
    var index = that.data.index,
    longTime = setInterval(() => {
      that.setData({
        index: that.data.index+1,
        longTime: longTime
      })
    }, 200)
  },
  leave: function (e) {
    var that=this
    clearInterval(that.data.longTime)
    that.stop()
    console.log('------leave------')
  },

  stop() {
    wx.request({
      url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
      data: {
        id: 't_stop'
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
      },
      success(res) {
        console.log('------stop------')
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    //this.socketStart();
  },
  socketStart: function () {

    // 设置socket连接地址 socketUrl
    const socket = (this.socket = io(
      socketUrl,
    ))

    socket.on('connect', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接成功 → \n\n' })

      // 此处修改为与server约定的数据、格式
      var sendMessage = '{"token":"v3jsoc8476shNFhxgqPAkkjt678","client":"发送内容"}'
      this.socketSendMessage(sendMessage);
    })

    socket.on('connect_error', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接失败 → \n\n' })
    })

    socket.on('connect_timeout', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接超时 → \n\n' })
    })

    socket.on('disconnect', reason => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接断开 → \n\n' })
    })

    socket.on('reconnect', attemptNumber => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('reconnect_failed', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET重连失败 → \n\n' })
    })

    socket.on('reconnect_attempt', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('error', err => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接错误 → \n\n' })
    })

    socket.on('message', function (d) {
      this.setData({ socketMessage: socketMessage += '服务器返回数据 → \n\n' })
      that.socketReceiveMessage(d)
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

  },
  lred(){
    var that=this
    if (that.data.lroa>0){
      that.setData({
        lroa: that.data.lroa - 10
      })
      wx.request({
        url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
        data: {
          id: 'lred',
          lroa: that.data.lroa,
          hroa: that.data.hroa
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
        },
        success(res) {
          console.log('------stop------')
        }
    })
    }
  
  },
    ladd() {
    var that = this
      if (that.data.lroa <180) {
        that.setData({
          lroa: that.data.lroa + 10
        })
        wx.request({
          url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
          data: {
            id: 'ladd',
            lroa: that.data.lroa,
            hroa: that.data.hroa
          },
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
          },
          success(res) {
            console.log('------stop------')
          }
        })
      }
  },
  hred() {
    var that = this
    if (that.data.hroa > 0) {
      that.setData({
        hroa: that.data.hroa - 10
      })
      wx.request({
        url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
        data: {
          id: 'lred',
          lroa: that.data.lroa,
          hroa: that.data.hroa
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
        },
        success(res) {
          console.log('------stop------')
        }
      })
    }

  },
  hadd() {
    var that = this
    if (that.data.hroa < 90) {
      that.setData({
        hroa: that.data.hroa + 10
      })
      wx.request({
        url: app.globalData.url + 'ctl', // 仅为示例，并非真实的接口地址
        data: {
          id: 'ladd',
          lroa: that.data.lroa,
          hroa: that.data.hroa
        },
        method: "POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // 默认值
        },
        success(res) {
          console.log('------stop------')
        }
      })
    }
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  takePhoto(){
    var that=this
    wx.request({
      url: app.globalData.url + 'takePhoto', // 仅为示例，并非真实的接口地址
      data: {

      },
      method: "GET",
      header: {
      },
      success(res) {
        console.log(res.data)
        var list = that.data.swiperList
        list[0].url = app.globalData.url + 'img/'+res.data.data
        that.setData({
          swiperList: list
        })
      }
    })
    },
  getT(){
    var that = this
    wx.request({
      url: app.globalData.url + 'temp', // 仅为示例，并非真实的接口地址
      data: {

      },
      method: "GET",
      header: {
      },
      success(res) {
        console.log(res.data)
        that.setData({
          T: "温度：" + res.data.temperature + "摄氏度 湿度：" + res.data.humidity
           + "%" 
        })
      }
    })
  }

})