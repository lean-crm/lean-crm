Template.adminUsers.helpers({
  users: function() {
    return Users.find({});
  }
});
