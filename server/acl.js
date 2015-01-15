
canManageUsers = function(userId) {
  return Roles.userIsInRole(userId, [Meteor.App.ROLES.ADMIN]);
};

Security.defineMethod("ifCanManageUsers", {
  fetch: [],
  deny: function (type, arg, userId) {
    return !canManageUsers(userId);
  }
});


Users.permit(['insert', 'update', 'remove']).ifCanManageUsers().apply();




