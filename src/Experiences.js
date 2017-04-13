import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';

import Experience from './Experience';
import RawExperiences from './RawExperiences';

class Experiences extends Component {
  render() {
    return (
        <Split priority='left' flex='both' showOnResponsive='both'>
          <Box>
            <Experience experience={RawExperiences[0]}/>
            <Experience experience={RawExperiences[1]}/>
          </Box>
          <Box
            textAlign='left'
            pad='medium'>
            <Experience experience={RawExperiences[2]} />
          </Box>
        </Split>
    );
  }
}

export default Experiences;
