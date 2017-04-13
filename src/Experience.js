import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns'
import Label from 'grommet/components/Label';
import Title from 'grommet/components/Title';

class Experience extends Component {
  render() {
    let achievementsList = this.props.experience.achievements.map((text) => <li key={text}>{text}</li>);
    return (
      <Box
        textAlign='left'
        pad='small'>
        <Title>
          {this.props.experience.title}
        </Title>
        <Columns justify='between' size='small'>
          <Box textAlign='left' pad='none'>
            <Label style={{textDecoration: 'underline', marginTop: '1%', marginBottom: '1%', fontSize: '95%'}}>
              {this.props.experience.company}
            </Label>
          </Box>
          <Box pad='none'>
            <Label style={{marginTop: 0, marginBottom: '1%'}}>
              {this.props.experience.timelineStart} - {this.props.experience.timelineEnd}
            </Label>
          </Box>
        </Columns>
        <ul>{achievementsList}</ul>
      </Box>
    );
  }
}

export default Experience;
