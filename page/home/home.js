Page({
  data: {
    name: 'April',
    age: 18,
    star:[
      {name: '周杰伦', skill: 'sing', age: '28'},
      {name: '林俊杰', skill: 'sing', age: '18' },
      {name: '成龙', skill: 'movie', age: '48' },
      {name: '章子怡', skill: 'movie', age: '38' },
    ],
    counter: 0
  },
  add(){
    // console.log('发生了点击')
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  subs(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})