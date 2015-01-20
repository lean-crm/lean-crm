Tasks = new Mongo.Collection('tasks');



Tasks.attachSchema(new SimpleSchema({
  reference_id: {
    type: String
  },
  assignee_id: {
    type: String,
    optional: true
  },
  status: {
    type: String,
    defaultValue: Meteor.App.TASK_STATUS.OPENED,
    allowedValues: taskStatuses
  },
  mission: {
    type: String
  },
  deferred: {
    type: Date,
    optional: true
  }
}));
