new Vue({
  el: '#app',
  data: {
    title: 'hello',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    }
  }
});
