Meteor.publish('users-i-can-manage', function (userId) {
  check(userId, Match.OneOf(String, undefined, null));

  if(!canManageUsers(this.userId)) {
    return [];
  }

  var fields = {services: 0};

  if(_.isNull(userId) || _.isUndefined(userId)) {
    return Meteor.users.find({}, {fields: fields});
  } else {
    return Meteor.users.find({_id: userId}, {fields: fields});
  }
});
