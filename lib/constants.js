if (Meteor.App) {
    throw new Meteor.Error('Meteor.App already defined? see lib/constants.js');
}

Meteor.App = {
    NAME: 'Meteor Boilerplate',
    ROLES: {
        ADMIN: "admin",
        SELLER: "seller",
        USER: "user"
    }
};
