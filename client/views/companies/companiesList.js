Template['companies.companiesList'].helpers({
  items: function() {
    return Companies.find({});
  }
});
