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
    name: 'Unknown Movie',
    scrollInto: '',
    inputVal: '',
  },
  onLoad: function (options) {
    console.log('options', options);

    const id = options.id;

    const Movies = new wx.BaaS.TableObject('movies');
    const Comments = new wx.BaaS.TableObject('comments');

    Movies.get(id).then((res) => {
      console.log('detail res', res);
      this.setData({
        name: res.data.name,
      })
    });

    let query = new wx.BaaS.Query();

    query.compare('movie_id', '=', id);

    Comments.setQuery(query).find().then((res) => {
      console.log('comments res', res);
      this.setData({
        items: res.data.objects,
      })
    });

  },
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
