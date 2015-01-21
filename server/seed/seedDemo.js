Meteor.startup(function() {
  if(0) {
    var createTask = function(referenceId) {
      entity = {
        reference_id: referenceId,
        status: Fake.fromArray(taskStatuses),
        mission: Fake.sentence(_.random(20, 50))
      };

      return Tasks.insert(entity);
    };


      // remove data
      Tasks.remove({});
      Deals.remove({});
      Persons.remove({});
      Companies.remove({});




    var entity = {};

    var companies = [];
    var persons = [];
    var deals = [];

    // insert companies
    for(var i = 1; i <= 30; i++) {
      entity = {
        name: Fake.word() + ' ' + Fake.fromArray(['s.r.o', 'inc.', 'sro']),
        description: Fake.sentence(_.random(20, 50))
      };

      companies.push(Companies.insert(entity));
    }


    // insert persons
    var personId = null;
    for(var i = 1; i <= 40; i++) {
      var randomUser = Fake.user();
      var randomUser2 = Fake.user();
      entity = {
        name: randomUser.fullname,
        emails: [randomUser.email],
        jobPositions: [
          {
            company_id: _.sample(companies),
            name: Fake.fromArray(['CTO', 'CEO', 'Marketing director', 'Director of directors', 'Superman']),
            emails: [randomUser2.email]
          }
        ]
      };
      if(_.random(0,2) < 2) {
        var randomUser2 = Fake.user();
        entity.emails.push(randomUser2.email);
      }

      persons.push(Persons.insert(entity));
    }

    // insert deals
    for(var i = 1; i <= 15; i++) {

      entity = {
        name: Fake.sentence(_.random(2, 7)),
        description: Fake.sentence(_.random(5, 30)),
        status: Fake.fromArray(dealStatuses),
        companies_ids: _.sample(companies, _.random(0, 3)),
        persons_ids: _.sample(persons, _.random(0, 4))
      };

      deals.push(Deals.insert(entity));
    }



    // insert tasks
    for(var i = 1; i <= 15; i++) {
      createTask(_.sample(companies));
      createTask(_.sample(persons));
      createTask(_.sample(deals));
    }

  }
});
