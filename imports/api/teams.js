import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
  Meteor.publish('teams', () => {
    return Teams.find();
  });
}

Meteor.methods({
  'teams.insert'({ teamName }) {
    check(teamName, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Teams.insert({
      teamName: teamName.toLowerCase(),
      teamMates: [this.userId],
      createdAt: new Date(),
    });
  },
});
