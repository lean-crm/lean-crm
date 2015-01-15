Meteor.publish(null, function () {
  return Persons.find({});
});
