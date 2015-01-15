Tasks = new Mongo.Collection('Tasks');


var status = [];
_.each(Meteor.App.TASK_STATUS, function(value) {
  status.push(value);
});


Tasks.attachSchema(new SimpleSchema({
  reference_id: {
    type: String
  },
  assignee_id: {
    type: String
  },
  status: {
    type: String,
    defaultValue: Meteor.App.TASK_STATUS.OPENED,
    allowedValues: status
  },
  mission: {
    type: String
  },
  deferred: {
    type: Date
  }
}));
