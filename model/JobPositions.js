JobPositions = new Mongo.Collection('jobPositions');

var jobPositionsSchema = new SimpleSchema([{
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
}, contactsSchema]);

JobPositions.attachSchema(jobPositionsSchema);


JobPositions.helpers({
  getCompanyName: function() {
    if(!this.company_id) return null;
    return Companies.findOne(this.company_id).name;
  },
  getPersonName: function() {
    if(!this.person_id) return null;
    return Persons.findOne(this.person_id).name;
  }
});
