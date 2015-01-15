Meteor.publish(null, function () {
  return Deals.find({});
});
