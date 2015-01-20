Persons = new Mongo.Collection('persons');


jobPositionsSchema = new SimpleSchema([contactsSchema, {
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
}]);


var personsSchema = new SimpleSchema([contactsSchema, {
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
}]);
Persons.attachSchema(personsSchema);


Persons.helpers({

  getPositions: function() {
    return JobPositions.find({person_id: this._id});
  }

});
