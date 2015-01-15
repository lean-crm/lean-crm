contactsSchema = new SimpleSchema({
  emails: {
    type: Array
  },
  "emails.$": {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email
  },
  phones: {
    type: Array
  },
  "phones.$": {
    type: String,
    optional: true
  }
});
