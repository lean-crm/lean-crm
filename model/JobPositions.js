JobPositions = new Mongo.Collection('jobPositions');

var jobPositionsSchema = new SimpleSchema([contactsSchema, {
  company_id: {
    type: String,
    autoform: {
      options: function () {
        return Companies.find().map(function (c) {
          return {label: c.name, value: c._id};
        });
      }
    }
  },
  person_id: {
    type: String
  },
  name: {
    type: String,
    label: "Position name",
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
}]);

JobPositions.attachSchema(jobPositionsSchema);
