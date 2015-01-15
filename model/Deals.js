Deals = new Mongo.Collection('Deals');


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
  company_ids: {
    type: Array,
    optional: true
  },
  "company_ids.$": {
    type: String
  },
  person_ids: {
    type: Array,
    optional: true
  },
  "person_ids.$": {
    type: String
  },
  activities: {
    type: [activitySchema],
    optional: true
  }
}));
