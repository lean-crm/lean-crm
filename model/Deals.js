Deals = new Mongo.Collection('deals');


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
  }
}));


Deals.helpers({
  getJobPositions: function() {
    return JobPositions.find({_id: {$in: this.jobPositions_ids}});
  },
  getActivities: function() {
    return Activities.find({reference: {_id: this._id, collection: 'Deals'}});
  }
});
