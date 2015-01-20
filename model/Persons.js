Persons = new Mongo.Collection('persons');


jobPositionsSchema = new SimpleSchema([{
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
  name: {
    type: String,
    label: "Position name",
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
}, contactsSchema]);


var personsSchema = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  jobPositions: {
    type: [jobPositionsSchema],
    optional: true
  }
}, contactsSchema]);

Persons.attachSchema(personsSchema);


Persons.helpers({

  getCompanyName: function(jobPosition) {
    return Companies.findOne(jobPosition.company_id).name;
  }

});
