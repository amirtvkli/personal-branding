var _ = require('underscore');
var $ = require('jquery');
const { dd } = require('dumper.js');
require('backbone');
var AppView = require('./app.view')
$(function() {
  var view = new AppView({
    el: 'app'
  });
  
  const users = [
    { user: 'barney', age: 36, active: true, createdAt: new Date(), getAge: () => this.age },
    { user: 'fred', age: 40, active: false, createdAt: new Date(), getAge: () => this.age },
    { user: 'pebbles', age: 1, active: true, createdAt: new Date(), getAge: () => this.age }
  ];

  dd(users);
});