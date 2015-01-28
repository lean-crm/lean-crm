Meteor.startup(function() {

  if(0) {
    console.log('> seedDemo start...');
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
    Activities.remove({});
    Deals.remove({});
    JobPositions.remove({});
    Persons.remove({});
    Companies.remove({});


    var entity = {};

    var companies = [];
    var persons = [];
    var jobPositions = [];
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
      entity = {
        name: randomUser.fullname,
        emails: [randomUser.email]
      };

      if(_.random(0,2) < 2) {
        var randomUser2 = Fake.user();
        entity.emails.push(randomUser2.email);
      }

      personId = Persons.insert(entity);
      persons.push(personId);


      jobPositions.push(JobPositions.insert({
        company_id: _.sample(companies),
        person_id: personId,
        name: Fake.fromArray(['CTO', 'CEO', 'Marketing director', 'Director of directors', 'Superman'])
      }));
    }

    // insert deals
    for(var i = 1; i <= 15; i++) {
      entity = {
        name: Fake.sentence(_.random(2, 7)),
        description: Fake.sentence(_.random(5, 30)),
        status: Fake.fromArray(dealStatuses),
        jobPositions_ids: _.sample(jobPositions, _.random(0, 3))
      };

      var dealId = Deals.insert(entity);
      deals.push(dealId);

      // add activities
      var count = _.random(1,7);
      for(var j = count; j <= 6; j++) {
        entity = {
          reference: {
            _id: dealId,
            collection: 'Deals'
          },
          type: _.sample(activityTypes),
          description: Fake.sentence(_.random(3, 12))
        };

        Activities.insert(entity);
      }
    }



    // insert tasks
    for(var i = 1; i <= 15; i++) {
      createTask(_.sample(companies));
      createTask(_.sample(persons));
      createTask(_.sample(deals));
    }

    console.log('> seedDemo end.');
  }
});
