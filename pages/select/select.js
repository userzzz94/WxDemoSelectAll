// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fapiaos:[
      { id: 1, title: '新鲜芹菜 半斤', num: 4, price: 0.01,},
      { id: 1, title: '新鲜芹菜 半斤', num: 1, price: 0.01,},
      { id: 2, title: '素米 500g', price: 0.03,}],

    checked: false,
    map: '', //存放选中的列表下标
    unitList: [], //存放选中的列表数据
    select_all: false, //全选
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //多选列表
  checkboxChange: function (e) {
    var that = this;
    var list = that.data.fapiaos;

    this.setData({
      map: e.detail.value,
    })

    var arr = [];
    e.detail.value.forEach(current => {
      console.log("current", current)
      for (var i = 0; i < list.length; i++) {
        if (i == current) {
          arr.push(list[i]);
          that.setData({
            jine_count: list[i].Zyf + "", //总金额
          })
          break;
        }
      }
    });

    if (e.detail.value.length == list.length) {
      that.setData({
        select_all: true
      })
    } else {
      that.setData({
        select_all: false
      })

    }

    this.setData({
      unitList: arr,
      yundan_amount: arr.length, //运单数

    })

    console.log("选中列表", that.data.unitList)
  },

  //全选与反全选
  selectall: function (e) {
    var that = this;
    var list = that.data.fapiaos;

    this.setData({
      select_all: (!that.data.select_all)
    })

    for (var i = 0; i < list.length; ++i) {
      list[i].checked = !list[i].checked;
      list[i].checked = that.data.select_all
    }
    var arr_all = [];
    if (that.data.select_all == true) { //全选
      for (var j = 0; j < list.length; ++j) {
        if (list[j].checked == true) {
          arr_all.push(list[j]);
        }
      }
      that.setData({
        unitList: arr_all,
        fapiaos: arr_all
      })
      console.log("全选", arr_all)
    } else { //取消全选
      that.setData({
        unitList: [],
        fapiaos: list
      })
      console.log("取消全选", that.data.unitList)
    }

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