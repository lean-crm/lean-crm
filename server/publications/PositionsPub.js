Meteor.publish(null, function () {
  return JobPositions.find({});
});
