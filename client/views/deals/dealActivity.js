Template.deals_activity.created = function() {
    var instance = this;

    instance.isEdited = new ReactiveVar(false);

    AutoForm.addHooks(instance.data._id ,{
        onSuccess: function(operation, result, template) {
            this.template.view.closestInstance('deals_activity').isEdited.set(false);
        }
    });

};

Template.deals_activity.helpers({
    isEdited: function() {
        return Template.instance().isEdited.get();
    }
});


Template.deals_activity.events({
    'click .edit-activity': function(e, instance) {
        e.preventDefault();
        instance.isEdited.set(true);
    }
});


