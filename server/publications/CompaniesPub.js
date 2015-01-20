Meteor.publish('companies', function () {
  return Companies.find({});
});
