Users = Meteor.users;

var roles = [];
_.each(Meteor.App.ROLES, function(value) {
  roles.push(value);
});

Meteor.users.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Array,
    minCount: 1,
    defaultValue: [Meteor.App.ROLES.SELLER]
  },
  "roles.$": {
    type: String,
    optional: true,
    allowedValues: roles
  }
}));
