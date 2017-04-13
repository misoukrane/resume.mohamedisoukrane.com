import React, { Component } from 'react';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';

const styles = {
  display: 'inline',
  border: '1px solid black',
  margin: '0 2px 1% 2px',
  padding: '1% 1% 1% 1%'
}
class Skill extends Component {
  render() {
    return (
      <li style={styles}>
        <Box>
          {this.props.skill.name}
          <Meter
            style={{marginLeft: '5px'}}
            colorIndex='brand'
            size='xsmall'
            value={this.props.skill.levelOfMastery}/>
        </Box>
      </li>
    );
  }
}

export default Skill;
