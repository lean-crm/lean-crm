Persons = new Mongo.Collection('persons');

var personsSchema = new SimpleSchema([contactsSchema, {
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
}]);
Persons.attachSchema(personsSchema);
