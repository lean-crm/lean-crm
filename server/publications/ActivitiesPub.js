Meteor.publish('activities', function () {
  return Activities.find({});
});
