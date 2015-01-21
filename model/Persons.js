Persons = new Mongo.Collection('persons');


var personsSchema = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
}, contactsSchema]);

Persons.attachSchema(personsSchema);


Persons.helpers({

  getCompanyName: function(jobPosition) {
    return Companies.findOne(jobPosition.company_id).name;
  }

});
