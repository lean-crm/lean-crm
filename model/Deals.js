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
  jobPositions_ids: {
    type: Array,
    optional: true
  },
  "jobPositions_ids.$": {
    type: String
  },
  activities: {
    type: [activitySchema],
    optional: true
  }
}));


Deals.helpers({
  getJobPositions: function() {
    return JobPositions.find({_id: {$in: this.jobPositions_ids}});
  }
});
