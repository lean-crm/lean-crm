Meteor.publish('jobPositions', function () {
  return JobPositions.find({});
});
