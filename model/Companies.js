Companies = new Mongo.Collection('companies');

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
