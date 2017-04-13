var app = new Vue({
  el:'#app',
  data: {
    message:"第一个vue数据渲染"
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app4 = new Vue({
  el: '.app4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})




