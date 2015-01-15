Router.configure({
  layoutTemplate: 'baseLayout'
});

Router.route('/', {
  template: 'home',
  action: function () {
    this.render();
  }
});

Router.route('/companies', {
  template: 'companies.companiesList',
  action: function () {
    this.render();
  }
});

Router.route('/persons', {
  template: 'persons.personsList',
  action: function () {
    this.render();
  }
});

Router.route('/deals', {
  template: 'deals.dealsList',
  action: function () {
    this.render();
  }
});

Router.route('/tasks', {
  template: 'tasks.tasksList',
  action: function () {
    this.render();
  }
});


Router.route('/admin/users', {
  name: 'admin.users',
  layoutTemplate: 'adminLayout',
  waitOn: function () {
    return Meteor.subscribe("users-i-can-manage");
  },
  action: function () {
    this.render();
  }
});

Router.route('/admin/user/:_id', {
  name: 'admin.userEdit',
  layoutTemplate: 'adminLayout',
  waitOn: function () {
    return Meteor.subscribe("users-i-can-manage", this.params._id);
  },
  data: function() {
      return Users.findOne({_id: this.params._id});
  },
  action: function () {
    this.render();
  }
});
