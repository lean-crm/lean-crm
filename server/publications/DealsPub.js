Meteor.publish(null, function () {
  return Companies.find({});
});
