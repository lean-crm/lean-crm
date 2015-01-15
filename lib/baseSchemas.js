contactsSchema = new SimpleSchema({
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  phones: {
    type: Array,
    optional: true
  },
  "phones.$": {
    type: String
  }
});
