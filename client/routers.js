Router.configure({
  layoutTemplate: 'baseLayout',

  waitOn: function () {
    return [
      Meteor.subscribe('companies'),
      Meteor.subscribe('persons'),
      Meteor.subscribe('jobPositions'),
      Meteor.subscribe('deals'),
      Meteor.subscribe('tasks')
    ]
  }
});

Router.route('/', {
  template: 'home',
  action: function () {
    this.render();
  }
});

Router.route('/companies', {
  name: 'companies.list',
  template: 'companies.list',
  action: function () {
    this.render();
  }
});

Router.route('/persons', {
  name: 'persons.list',
  template: 'persons.list',
  action: function () {
    this.render();
  }
});

Router.route('/person/edit/:_id', {
  name: 'persons.edit',
  template: 'persons.edit',
  data: function() {
    if (this.ready()) {
      var person = Persons.findOne({_id: this.params._id});
      return {
        person: person,
        positions: person.getPositions()
      };
    }
  },
  action: function () {
    if (this.ready()) {
      this.render();
    } else {
      this.render('loading');
    }
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
