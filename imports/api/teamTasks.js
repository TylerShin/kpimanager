import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const TeamTasks = new Mongo.Collection('teamTasks');

if (Meteor.isServer) {
  Meteor.publish('teamTasks', ({ teamId, count }) => {
    if (count) {
      return TeamTasks.find({ teamId }, { count });
    }
    return TeamTasks.find({ teamId });
  });
}

Meteor.methods({
  'teamTasks.insert'({ content, memberIds, dueDate, teamId }) {
    /* types BEGIN //
    content: String,
    memberIds, Array,
    dueDate: Date,
    teamId: String,
    // END */
    check(content, String);
    check(teamId, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    TeamTasks.insert({
      content,
      memberIds,
      dueDate,
      teamId,
      createdAt: new Date(),
    });
  },
});
