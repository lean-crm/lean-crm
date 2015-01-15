if (Meteor.App) {
    throw new Meteor.Error('Meteor.App already defined? see lib/constants.js');
}

Meteor.App = {
    NAME: 'Meteor Boilerplate',
    ROLES: {
        ADMIN: "admin",
        SELLER: "seller",
        USER: "user"
    },
    DEAL_STATUS: {
        PENDING: 'pending',
        OPENED: 'opened',
        WON: 'won',
        LOST: 'lost'
    },
    TASK_STATUS: {
        OPENED: 'opened',
        CLOSED: 'closed'
    },
    ACTIVITY_TYPES: {
        CALL: 'call',
        EMAIL: 'email',
        MEET: 'meet'
    }
};
