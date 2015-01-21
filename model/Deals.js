Deals = new Mongo.Collection('deals');


var activityTypes = [];
_.each(Meteor.App.ACTIVITY_TYPES, function(value) {
  activityTypes.push(value);
});

var activitySchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: activityTypes
  },
  description: {
    type: String
  }
});

Deals.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    defaultValue: Meteor.App.DEAL_STATUS.OPENED,
    allowedValues: dealStatuses
  },
  companies_ids: {
    type: Array,
    optional: true
  },
  "companies_ids.$": {
    type: String
  },
  persons_ids: {
    type: Array,
    optional: true
  },
  "persons_ids.$": {
    type: String
  },
  activities: {
    type: [activitySchema],
    optional: true
  }
}));


Deals.helpers({
  getCompanies: function() {
    return Companies.find({_id: {$in: this.companies_ids}});
  },
  getPersons: function() {
    return Persons.find({_id: {$in: this.persons_ids}});
  }
});
