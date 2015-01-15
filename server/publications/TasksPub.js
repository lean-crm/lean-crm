Meteor.publish(null, function () {
  return Tasks.find({});
});
