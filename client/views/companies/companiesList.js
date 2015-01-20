Template['companies.list'].helpers({
  items: function() {
    return Companies.find({});
  }
});
