Positions = new Mongo.Collection('Positions');

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

Positions.attachSchema(positionsSchema);
