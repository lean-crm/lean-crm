Template['persons.list'].helpers({
  items: function() {
    return Persons.find({});
  }
});
