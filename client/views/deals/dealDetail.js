Template.deal_detail.events({
    'click .new-action': function(e, instance) {
        e.preventDefault();

        var deal = instance.data.deal;
        Activities.insert({
            reference: {
                _id: deal._id,
                collection: 'Deals'
            }
        });
    }
});
