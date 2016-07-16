import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Username from '../../username/username';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';

class TeamItem extends React.Component {
  render() {
    const { team } = this.props;
    const userList = team.get('teamMates').map((userId, index) => {
      return (
        <Chip
          style={{ margin: '4px' }}
          key={index}
        >
          <Username userId={userId} />
        </Chip>
      );
    });

    return (
      <Card style={{ width: '30%', margin: '10px', display: 'inline-block' }}>
        <CardHeader
          title={team.get('teamName').toUpperCase()}
          style={{ backgroundColor: '#f5f5f5' }}
        />
        <Subheader>Active Projects</Subheader>
        <CardText>
          <List>
            <ListItem primaryText="Inbox" />
            <ListItem primaryText="Starred" />
          </List>
        </CardText>
        <Subheader>
          {`Members ${team.get('teamMates').count()}`}
        </Subheader>
        <CardText>
          {userList}
        </CardText>
      </Card>
    );
  }
}

TeamItem.propTypes = {
  team: ImmutablePropTypes.map.isRequired,
};

export default TeamItem;
