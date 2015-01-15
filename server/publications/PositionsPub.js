Meteor.publish(null, function () {
  return Positions.find({});
});
