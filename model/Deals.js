Deals = new Mongo.Collection('Deals');

var status = [];
_.each(Meteor.App.DEAL_STATUS, function(value) {
  status.push(value);
});

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
  status: {
    type: String,
    defaultValue: Meteor.App.DEAL_STATUS.OPENED,
    allowedValues: status
  },
  activities: {
    type: [activitySchema],
    optional: true
  }
}));
