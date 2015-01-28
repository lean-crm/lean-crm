Activities = new Mongo.Collection('activities');

Activities.attachSchema(new SimpleSchema({
    reference: {
        type: Object
    },
    'reference._id': {
        type: String
    },
    'reference.collection': {
        type: String
    },
    type: {
        type: String,
        allowedValues: activityTypes,
        defaultValue: Meteor.App.ACTIVITY_TYPES.CALL
    },
    description: {
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            }
        }
    }
}));
