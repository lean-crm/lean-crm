Meteor.startup(function () {
  //Users.update({_id:'7NJaFBgpXNqCScug8'}, {$unset: {roles: ""}});
  //Users.update({_id:'fLvTks53YDdyFYMug'}, {$unset: {roles: ""}});
  //Roles.setUserRoles('7NJaFBgpXNqCScug8', ["admin"]);
});



EditableText.userCanEdit = function(doc,Collection) {
    return true;
}
