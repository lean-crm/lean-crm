Meteor.startup(function() {

  // remove data
  Tasks.remove({});
  Deals.remove({});
  Positions.remove({});
  Persons.remove({});
  Companies.remove({});


  for(var i = 1; i <= 30; i++) {
    var entity = {
      name: Fake.word() + Fake.fromArray(['s.r.o', 'inc.', 'sro']),
      description: Fake.sentence(_.random(20, 50))
    };

    Companies.insert(entity);
  }


});
