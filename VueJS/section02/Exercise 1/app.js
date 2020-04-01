new Vue({
  el: '#exercise',
  data: {
    name: 'Edu',
    age: 39,
    image:
      'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  },
  methods: {
    age3: function() {
      return this.age * 3;
    },
    float: function() {
      return Math.random();
    }
  }
});
