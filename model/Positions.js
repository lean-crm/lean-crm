Positions = new Mongo.Collection('Positions');

var positionsSchema = new SimpleSchema([contactsSchema, {
  company_id: {
    type: String
  },
  contact_id: {
    type: String
  },
  position: {
    type: String,
    optional: true
  }
}]);

Positions.attachSchema(positionsSchema);
