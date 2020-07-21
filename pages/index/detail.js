//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    items: [
      { id: 1, text: "This is the first comment." },
      { id: 2, text: "This is the second comment." },
      { id: 3, text: "This is the third comment." },
    ],
    scrollInto: '',
    inputVal: '',
  },
  onLoad: function () {},
  inputChange: function(e) {
    this.setData({
      inputVal: e.detail.value,
    })
  },
  formReset: function() {
    const val = this.data.inputVal;

    if (val.trim() === '') return
    const items = this.data.items;
    const nextId = items.length + 1;
    items.push({id: nextId, name: val});
    this.setData({
      items,
    })
    setTimeout(() => {
      this.setData({
        scrollInto: `item-${nextId}`
      })
    }, 250);
    this.setData({
      inputVal: '',
    });
  }
});
