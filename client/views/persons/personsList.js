Template['persons.personsList'].helpers({
  items: function() {
    return Persons.find({});
  }
});
