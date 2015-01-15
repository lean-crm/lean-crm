Companies = new Mongo.Collection('Companies');

Companies.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
}));
