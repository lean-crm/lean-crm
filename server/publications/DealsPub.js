Meteor.publish('deals', function () {
  return Deals.find({});
});
