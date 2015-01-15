Template['deals.dealsList'].helpers({
  items: function() {
    return Deals.find({});
  }
});
