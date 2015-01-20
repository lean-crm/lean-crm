JobPositions = new Mongo.Collection('jobPositions');

var positionsSchema = new SimpleSchema([contactsSchema, {
  company_id: {
    type: String
  },
  person_id: {
    type: String
  },
  name: {
    type: String,
    optional: true
  }
}]);

JobPositions.attachSchema(positionsSchema);
