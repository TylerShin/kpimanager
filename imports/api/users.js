import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish('user', (userId) => {
    return Meteor.users.find(userId);
  });
}


